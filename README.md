# Enviando dados do Arduino para o Servidor XAMPP
  
> Utilizado: XAMPP, Arduino + Ethernet Shield
  
### Banco de Dados:
* Inicialize o XAMPP e crie seu banco de dados:  

`
CREATE TABLE arduino(    
  id int not null,    
  inf varchar(30) not null,  
  primary key (id) 
)
`  
> Caso queira usar outros nomes e mais colunas na tabela, deverá alterar os scripts .php  

* Coloque a pasta js e todos os arquivos com extenções .php e .html no local:  

`C:\xampp\htdocs`  

Isso possibilitará acessar os scripts pelo navegador.
  
* Faça o teste do script. No navagador escreva:   

`http://localhost/arduino.php?inf=teste`  

Estará escrevendo no banco de dados a string "teste".

### Conectando o Arduino 


### Gráfico no html  
  
Após toda configuração acesse:  
`http://localhost/grafico.php`  
