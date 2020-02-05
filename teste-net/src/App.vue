<template>
  <div id="app">
    <p>{{msg}}</p>

    

    <button
    type="button"
    @click="listEquipment()"
    >list equipment</button>

    <button
    type="button"
    @click="listRouterByMac()"
    >listRouterByMac</button>

    <button
    type="button"
    @click="updateNetwork()"
    >updateNetwork</button>

    <button
    type="button"
    @click="sendEmail()"
    >sendEmail</button>
  </div>
</template>

<script>
/*
codeCity e codOperator é a mesma coisa

marta
2.4Ghz
https://minhanet3.net.com.br/ecare-api-client-wifi/api/v4/client/wifi/updateRouter
params
{
  "user":"netcombo",
  "codCity":"003",
  "mac":"942CB3BD7E8A",
  "model":"HGA12R-02",
  "ip":"10.18.168.170",
  "contract":"392020305",
  "ssid":null,
  "password":"Cl1ffirish",
  "ssid5":null,
  "password5":null,
  "isWifiV2":"1",
  "clientOrderType":"MANAGEGMENT_WIFI_UPDATE_PASSWORD"
}


*/
  import axios from 'axios'

  var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmb3JtYVBhZ2FtZW50byI6IkRFQklUTyBFTSBDT05UQSIsInRlbGVmb25lIjoiMDAwMDAwMDAwMDAiLCJyb2xlIjoiVVNFUiIsImNvZGlnb09wZXJhZG9yYSI6IjAwMyIsInR2RGlnaXRhbCI6dHJ1ZSwiaWRDaWRhZGUiOiIxIiwiY3JtQ2xpZW50SWQiOm51bGwsImxvZ2luIjoibWFtYW1hY2VkbyIsImRpYVZlbmNpbWVudG8iOjE1LCJxdWFudGlkYWRlQ29udHJhdG9zIjoxLCJwYXJ0bmVyQWNjb3VudCI6bnVsbCwiYWRkcmVzc0lkIjoiNjM4ODAyMzE0IiwiY29kaWdvTmV0IjoiMDAzMzkyMDIwMzA1IiwicGVyZmlsQ2xpZW50ZSI6MjMwLCJjcGYiOiIyOTM2MDUxMTg1NCIsInRpcG9Db250cmF0byI6MSwiY3VzdG9tZXJOZXRVbm8iOmZhbHNlLCJleHAiOjE1NzQ0NTA2NDAsImRhdGFDYWRhc3RybyI6MTUzNDk5MzIwMDAwMCwiZW1haWwiOiJtYXJ0YW1hY2Vkb0Bob3RtYWlsLmNvbSIsInNlZ21lbnRvQ2xpZW50ZSI6IlNFTSBTRUdNRU5UTyIsInN0YXR1c0NvbnRyYXRvIjoiMSIsInRpcG9TZWdtZW50b0NsaWVudGUiOiI1IiwiY2xpZW50SWQiOm51bGwsImNvbnRyYXRvIjoiMzkyMDIwMzA1Iiwibm9tZSI6Ik1BUlRBIERJQVMgTUFDRURPIiwic3RhdHVzQWRpbXBsIjoidHJ1ZSIsIm5vZGUiOiJDTE1GQSIsInR2QW5hbG9naWMiOmZhbHNlLCJwaG9uZSI6dHJ1ZSwiYnJvYWRiYW5kIjp0cnVlLCJjb2RDaWRhZGVOZXQiOiI4ODQxMiIsImNvZGlnb0ltb3ZlbCI6NTMwNTY4NjMxLCJzdGF0dXNDb250cmF0b0Rlc2NyaWNhbyI6IkNPTkVDVEFETyIsInNyc2NhaWRzdGF0dXMiOjF9.CrxvDrAYYV0uPz1wLhpwGPagnKa5dAcEgk5M966otv0"
  const IDM_ACCESS_TOKEN = "4a7d8d3164656774";
  var APPLICATION_KEY = "2251d8c0a94601364c54000d3ac06d76";
  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        // Rodrigo
        // codOperator: "856",
        // contractNumber: "352580300",
        // model: "48003305CEC6",
        // mac:"TC7337"

        // Marta
        codOperator: "003",
        contractNumber: "392020305",
        model: "HGA12R-02",
        mac:"942CB3BD7E8A"


      }
      // Cookies.get("sessionCookie")
    },
    mounted: function () {
      let rodrigo = {
        codOperator: "856",
        contractNumber: "352580300",
        model: "48003305CEC6",
        mac:"TC7337"
      };

      let marta = {
        codOperator: null,
        contractNumber: null,
        model: null,
        mac: null
      };

      let selectedUser = rodrigo
    },
    methods: {
      listEquipment: function() {
        axios({
          // funciona com e sem credentials
          // url: `https://claro.dev.gateway.zup.me/technician/v2/equipment/wifi/${this.codOperator}/${this.contractNumber}`,

          // só funciona sem credentials
          url: `https://dev-gw.claro.com.br/technician/v2/equipment/wifi/${this.codOperator}/${this.contractNumber}`,
          
          // 500
          // url: "https://qa-gw.claro.com.br/technician/v2/equipment/wifi/006/009541258?gw-app-key=2251d8c0a94601364c54000d3ac06d76",

          // 404
          // url: "https://prd-gw.claro.com.br/technician/v2/equipment/wifi/006/009541258?gw-app-key=2251d8c0a94601364c54000d3ac06d76",
          
          
          // url: "https://minhanet.net.com.br/technician/v2/equipment/wifi/006/009541258?gw-app-key=2251d8c0a94601364c54000d3ac06d76",
          method: "GET",
          // withCredentials: true,
          headers: {
            "x-wcp-token": token
          },
          params: {
            "gw-app-key": APPLICATION_KEY
          },
        }).then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        })
      },
      listRouterByMac: function() {
        axios({
          // url: `https://claro.dev.gateway.zup.me/technician/v2/wifi/details/${this.contractNumber}/${this.codOperator}/${this.model}/${this.mac}`,

          // só funciona sem credentials
          url: `https://dev-gw.claro.com.br/technician/v2/wifi/details/${this.contractNumber}/${this.codOperator}/${this.model}/${this.mac}`,
          
          // 500
          // url: `https://qa-gw.claro.com.br/technician/v2/wifi/details/${this.contractNumber}/${this.codOperator}/${this.model}/${this.mac}`,

          // 404
          // url: `https://prd-gw.claro.com.br/technician/v2/wifi/details/${this.contractNumber}/${this.codOperator}/${this.model}/${this.mac}`,
          method: "GET",
          // withCredentials: true,
          headers: {
            "x-wcp-token": token
          },
          params: {
            "gw-app-key": APPLICATION_KEY
          }
        }).then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        })
      },
      updateNetwork: function() {
        axios({
          // url: "https://claro.dev.gateway.zup.me/technician/v2/wifi/details/006/009541258/TG1692A/B0935BEAD40B?gw-app-key=2251d8c0a94601364c54000d3ac06d76",
          // url: `https://claro.dev.gateway.zup.me/technician/v2/wifi/details/${this.codCity}/${this.contractNumber}/${this.model}/${this.mac}`,
          

          url: `https://dev-gw.claro.com.br/technician/v2/wifi/details/${this.codOperator}/${this.contractNumber}/${this.model}/${this.mac}`,
          
          // funcionou
          // url: "https://qa-gw.claro.com.br/technician/v2/wifi/details/006/009541258/TG1692A/B0935BEAD40B?gw-app-key=2251d8c0a94601364c54000d3ac06d76",
          
          // erro
          // url: "https://prd-gw.claro.com.br/technician/v2/wifi/details/006/009541258/TG1692A/B0935BEAD40B?gw-app-key=2251d8c0a94601364c54000d3ac06d76",
          method: "PUT",
          // withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            // "x-application-key": APPLICATION_KEY,
            "x-wcp-token": token
          },
          params: {
            "gw-app-key": APPLICATION_KEY
          },
          data: {
            // "ip":"10.12.36.234",
            // "ssid":null,
            // "password":"senha@123456235",
            // "ssid5":null,
            // "password5":null,
            // "clientOrderType":"MANAGEGMENT_WIFI_UPDATE_PASSWORD"
            

            // marta 
            // "user":"netcombo",
            // "codCity":"003",
            // "mac":"942CB3BD7E8A",
            // "model":"HGA12R-02",
            "ip":"10.18.168.170",
            // "contract":"392020305",
            // "ssid":null,
            "password":"Cl1ffirish",
            // "ssid5":null,
            // "password5":null,
            // "isWifiV2":"1",
            "clientOrderType":"MANAGEGMENT_WIFI_UPDATE_PASSWORD"
          }
        }).then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        })
      },
      sendEmail: function() {
        axios({
          // funciona com e sem credentials
          // url: `https://claro.dev.gateway.zup.me/technician/v2/wifi/sendmail/${this.codOperator}/${this.contractNumber}`,
          
          // só funciona sem credentials
          url: `https://dev-gw.claro.com.br/technician/v2/wifi/sendmail/${this.codOperator}/${this.contractNumber}`,

          // testar
          // url: "https://qa-gw.claro.com.br/technician/v2/wifi/sendmail/006/009541258",
          
          // testar
          // url: "https://prd-gw.claro.com.br/technician/v2/wifi/sendmail/006/009541258",
          method: "POST",
          // withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            // "Authorization": "Bearer " + IDM_ACCESS_TOKEN,
            // "x-application-key": APPLICATION_KEY,
            "x-wcp-token": token,
            // "gw-app-key": APPLICATION_KEY
          },
          params: {
            "gw-app-key": APPLICATION_KEY
          },
          data: {
            email: "helderjosemelo@gmail.com",
            password: "senha@123456235",
            ssid: "senha@12345603"
          }
        }).then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>

<style>

</style>
