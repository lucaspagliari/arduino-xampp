#include <SPI.h>
#include <Ethernet.h>

// mac address
byte mac[] = {
    0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED
};

// Ip que será dado ao arduino 
IPAddress ip(192, 168, 0, 5);
IPAddress gateway(192, 168, 0, 3);

// Ip que será conectado
IPAddress server(192,168,0,100); // Utilize o ipv4

EthernetClient client;

void setup() {
    Serial.begin(9600);
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
void loop(){
    // Conexão 
    if (client.connect(server, 80)) {
        Serial.println("Conectado!");
        
        // Faz a requisição http, definindo a var inf = ola
        client.println("GET /arduino.php?inf=teste");
        client.println("Host: 192.168.0.101");
        client.println("Connection: close");
        client.println();
    } 
    else {
        Serial.println("Falha ao conectar.");
    }
    delay(3000);
}
