#include <SPI.h>
#include <Ethernet.h>

#define MQ_analog A0
#define MQ_dig 7

byte mac[] = {
    0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED
};

int valor_analog;
int valor_dig;
String url, valor;

// Ip da placa
IPAddress ip(192,168,0,30);
IPAddress gateway(192,168,0,1);
IPAddress subnet(255, 255, 255, 0);

// Ip que será conectado
IPAddress server(192,168,0,4);

EthernetClient client;

void setup() {
    Serial.begin(9600);
    pinMode(MQ_analog, INPUT);
    pinMode(MQ_dig, INPUT);

    if (Ethernet.begin(mac) == 0) {
        Serial.println("Falha ao configurar Ethernet usando o DHCP");
    }
    Ethernet.begin(mac, ip, gateway, subnet);
    delay(1000);
    Serial.println("Conectando...");
    
}

// Recebe valor do sensor e converte para String
String valorSensor() {
   valor_analog = analogRead(MQ_analog); 
   valor_dig = digitalRead(MQ_dig);
   delay(500);
   return String(valor_analog);
 
}

void loop(){
    valor = valorSensor();
    url = "GET /arduino.php?inf=" + valor;

    Serial.println(url);
    if (client.connect(server, 80)) {
        Serial.println("Conectado!");

        // Faz a requisição http
        client.println(url);    
        client.println("Host: 192.168.0.31");
        client.println("Connection: close");
        client.println();
    } 
    else {
        Serial.println("Falha ao conectar.");
    }
    delay(4000);
}
