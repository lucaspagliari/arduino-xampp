const safeSensorValue = 200;
const attentionSensorValue = 300;
const dataMinimumLength = 30;
const averageDivNumber = 10;
const stylePalette = [
    { "r": 0, "g": 240, "b": 0, "text": "Safe" },
    { "r": 255, "g": 255, "b": 0, "text": "Atention" },
    { "r": 222, "g": 1, "b": 2, "text": "Danger" }
]
function start() {
    setInterval(getInformationFromDataBase, 1000)
}

function getInformationFromDataBase() {
    $.post("data.php", JSON.stringify(),
        function (data) {
            const idArrayValues = [];
            const sensorArrayValues = [];
            const dataArray = data.split(",");
            let id = 0
            if (dataArray.length >= dataMinimumLength) {
                for (let i = dataArray.length - dataMinimumLength; i < dataArray.length; i++) {
                    idArrayValues.push(id);
                    sensorArrayValues.push(parseInt(dataArray[i]));
                    id++;
                }
                idArrayValues.pop();
                sensorArrayValues.pop();
                renderGraph(idArrayValues, sensorArrayValues);
                renderStatusInformation(sensorArrayValues);
            } else {
                document.querySelector("#chart-container").innerHTML = `<h2 class="titleInfo">Not Enough Values</h2>`;
            }
        }
    );
}

function renderStatusInformation(dataValuesArray) {
    let average = 0;
    let indexPalette;
    for (let i = dataValuesArray.length - averageDivNumber; i < dataValuesArray.length; i++) {
        average += dataValuesArray[i];
    }
    
    average /= averageDivNumber;

    if (average <= safeSensorValue) {
        indexPalette = 0;
    } else if (average <= attentionSensorValue) {
        indexPalette = 1;
    } else {
        indexPalette = 2
    }

    const style = stylePalette[indexPalette];
    let html = `
        <tr>
            <th>Color</th>
            <th>Status</th>
            <th>Average</th>
        </tr>
        <tr>
            <td style="background-color:rgb(${style.r}, ${style.g}, ${style.b})"></td>
            <td style="color: rgb">${style.text}</td>
            <td>${average}</td>
        </tr>`;

    document.querySelector("#status-table").innerHTML = html;
}

function renderGraph(xValues, yValues) {
    document.querySelector(".line-chart").innerHTML = ""
    let htmlGraph = document.querySelector(".line-chart");
    var lineChart = new Chart(htmlGraph, {
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