import{C as o}from"./auto.ovie_dKz.js";import{_ as d}from"./_plugin-vue_export-helper.x3n3nnut.js";import{v as r,t as c,L as i}from"./entry.Wji1TRvI.js";const l={mounted(){this.$nextTick(function(){const t={labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],datasets:[{label:"Grafik PH Tanah",data:[6.2],backgroundColor:"#712DDF",borderWidth:0}]},e={scales:{y:{max:7,beginAtZero:!0}}},a=document.getElementById("myChart").getContext("2d");new o(a,{type:"bar",data:t,options:e});const s={datasets:[{label:"Dataset 1",data:[30,70],backgroundColor:["#A536E9","#712DDF"],borderWidth:0}]},n=document.getElementById("dChart").getContext("2d");new o(n,{type:"doughnut",data:s,options:{responsive:!0,plugins:{legend:{position:"top"},title:{display:!1,text:"Chart.js Doughnut Chart"}}}})})}},h=i('<div class="card border-0 n-bg-secondary mx-5 mt-5 py-2 text-center n-rounded"><div class="w-100 d-flex justify-content-around"><h3>SUHU CUACA</h3><h3>24 Derajat</h3></div></div><h1 class="text-center my-3 n-text-tersier">DATA PH TANAH</h1><div class="row gy-3 mt-3 mx-4"><div class="col-6 text-center"><div class="card p-4 border-0 n-bg-secondary n-rounded"><h1 class="m-0">6.2</h1></div></div><div class="col-6 text-center"><div class="card p-4 border-0 n-bg-secondary n-rounded"><h1 class="m-0">Baik</h1></div></div></div><h1 class="text-center my-3 n-text-tersier">HISTORICAL PH TANAH</h1><canvas id="myChart" style="padding-bottom:90px;"></canvas>',5),p=[h];function u(t,e,a,s,n,m){return c(),r("div",null,p)}const y=d(l,[["render",u]]);export{y as default};
