#include <SPI.h>
#include <Ethernet.h>

#define MQ_analog A1
#define MQ_dig 7

byte mac[] = {
    0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xAD
};

int valor_analog;
int valor_dig;
String url, valor;

//Ip da placa
IPAddress ip(192, 168, 0, 32);
IPAddress gateway(192, 168, 0, 32);

// Ip que será conectado
IPAddress server(192,168,0,102);

EthernetClient client;

void setup() {
    Serial.begin(9600);
    pinMode(MQ_analog, INPUT);
    pinMode(MQ_dig, INPUT);
        while (!Serial) {
        ;
    }
    if (Ethernet.begin(mac) == 0) {
        Serial.println("Falha ao configurar Ethernet usando o DHCP");
        Ethernet.begin(mac, ip);
    }
    delay(1000);
    Serial.println("Conectando...");
    
}

// Conecta faz a requisão e desconecta,
// possivelmente será possível passar os dados dos sensores
void loop(){
    //Conexão
    valor = valorSensor();
    url = "GET /arduino.php?inf=" + valor;
    Serial.println(url);
    if (client.connect(server, 80)) {
        Serial.println("Conectado!");
        
        // Faz a requisição http, definindo a var inf = ola
        client.println(url);
    
        // Não sei a necessidade desta parte
        client.println("Host: 192.168.0.102");
        //client.println("Connection: close");
        client.println();
    } 
    else {
        Serial.println("Falha ao conectar.");
    }
    delay(2000);
}

String valorSensor() {
   valor_analog = analogRead(MQ_analog); 
   valor_dig = digitalRead(MQ_dig);
   delay(500);
   return String(valor_analog);
 
}