
const dataMinimumArrayLength = 30;
const averageAmount = 10;

const safeValueLimit = 200;
const attentionValueLimit = 300;

const stylePalette = [
    { "r": 10, "g": 250, "b": 10, "text": "Safe" },
    { "r": 255, "g": 255, "b": 10, "text": "Atention" },
    { "r": 222, "g": 10, "b": 10, "text": "Danger" }
]

function start() {
    getInformationFromDataBase();
    setInterval(getInformationFromDataBase, 4000);
}

function getInformationFromDataBase() {
    $.post("data.php", JSON.stringify(),
        function (data) {
            const idValuesArray = [];
            const dataValuesArray = [];
            data = data.split(",");
            let id = 0

            for (let i = data.length - dataMinimumArrayLength; i < data.length; i++) {
                idValuesArray.push(id);
                dataValuesArray.push(parseInt(data[i]));
                id++;
            }

            idValuesArray.pop();
            dataValuesArray.pop();

            renderGraph(idValuesArray, dataValuesArray);
            renderStatus(dataValuesArray);
        }
    );
}

function getStyleAndAverageStatus(dataValuesArray) {
    let average = 0;
    for (let i = dataValuesArray.length - averageAmount; i < dataValuesArray.length; i++) {
        average += dataValuesArray[i];
    }
    average /= averageAmount;
    const indexPalette = average <= safeValueLimit ? 0 : average <= attentionValueLimit ? 1 : 2;
    return [stylePalette[indexPalette], average];
}

function renderStatus(dataValuesArray) {
    const status = getStyleAndAverageStatus(dataValuesArray);
    const style = status[0];
    let html = `
        <tr>
            <th>Color</th>
            <th>Status</th>
            <th>Average</th>
        </tr>
        <tr>
            <td style="background-color:rgb(${style.r}, ${style.g}, ${style.b})"></td>
            <td style="color: rgb">${style.text}</td>
            <td>${status[1]}</td>
        </tr>`;

    document.querySelector("#status-table").innerHTML = html;
}

function renderGraph(xValues, yValues) {
    document.querySelector(".line-chart").innerHTML = ""
    let htmlGraph = document.querySelector(".line-chart");
    let lineChart = new Chart(htmlGraph, {
        type: 'line',
        options: {
            animation: {
                duration: 0
            }
        },
        data: {
            labels: xValues,
            datasets: [{
                label: "Taxa de CO2",
                data: yValues,
                borderWidth: 1,
                borderColor: '#1b1997',
                backgroundColor: '#0401a046',
            }]
        }
    });
}

start();
