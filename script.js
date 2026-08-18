const data = [["2023", "ASSISTENTE ADMINISTRATIVO ES", "00592.000204/2022-41", "PE", "FEITO", "NÃO", "FEITO"], ["2023", "LOCAÇÃO DE VEÍCULOS", "00592.000216/2022-76", "PE", "NÃO", "NÃO", "FEITO"], ["2023", "CHAMAMENTO PÚBLICO", "00592.000621/2022-94 / 00592.001032/2024-95", "INEX", "NÃO", "NÃO", "NÃO TEM"], ["2023", "ADAPTAÇÃO PF ES", "00592.000184/2022-17", "PE", "No processo só tem 2022", "NÃO", "FEITO"], ["2023", "OUTSOURCING DE IMPRESSÃO - EMERGENCIAL", "00592.000349/2023-23", "DISP", "NÃO TEM NECESSIDADE", "NÃO", "NÃO"], ["2023", "LIMPEZA E CONSERVAÇÃO - PF ES", "00592.000200/2022-63", "PE", "NÃO", "NÃO", "FEITO"], ["2023", "COPEIRAGEM RJ", "00592.000128/2023-55", "PE", "NÃO", "NÃO", "FEITO"], ["2023", "5 LAUDOS DE MERCADO IMOBILIÁRIO", "00592.000462/2023-17", "DE", "NÃO TEM NECESSIDADE", "NÃO", "NÃO"], ["2023", "LICENÇAS DE SOFTWARE", "00592.000689/2023-54", "PE", "NÃO", "NÃO", "NÃO"], ["2023", "FORNECIMENTO COM INSTALAÇÃO AR CENTRAL", "00592.000278/2022-88", "PE", "NÃO", "NÃO", "FEITO"], ["2023", "MANUTENÇÃO DE ELEVADORES - VOLTA REDONDA", "00592.000626/2023-06", "DE", "NÃO TEM NECESSIDADE", "NÃO", "NÃO"], ["2023", "MANUTENÇÃO PREDIAL RJ", "00592.000830/2022-38", "PE", "NÃO", "NÃO", "FEITO"], ["2023", "AQUISIÇÃO DE CAFÉ", "00592.000587/2023-39", "DE", "NÃO TEM NECESSIDADE", "NÃO", "NÃO"], ["2023", "BATERIA NO BREAK", "00592.000044/2023-11", "DE", "NÃO TEM NECESSIDADE", "NÃO", "NÃO"], ["2023", "MOBILIÁRIO EM GERAL (CPS E PF/ES)", "00592.000599/2023-63", "PE", "NÃO", "NÃO", "FEITO"], ["2024", "EMERGENCIAL ASSISTENTE ADMINISTRATIVO - ES", "00592.000923/2024-24", "DE", "NÃO TEM NECESSIDADE", "FEITO", "NÃO"], ["2024", "EMERGENCIAL - VIGILÂNCIA ORGÂNICA", "00592.000940/2024-61", "DE", "NÃO TEM NECESSIDADE", "FEITO", "NÃO"], ["2024", "AQUISIÇÃO DE CAFÉ", "00592.000587/2023-39", "DE", "NÃO TEM NECESSIDADE", "FEITO", "FEITO"], ["2024", "ASSISTENTE ADMINISTRATIVO ES", "00592.000817/2023-60", "PE", "FEITO", "FEITO", "FEITO"], ["2024", "EMERGENCIAL LIMPEZA, CONSERVAÇÃO", "00592.001028/2024-27", "DE", "NÃO TEM NECESSIDADE", "FEITO", "FEITO"], ["2024", "MUDANÇA REGIONAL", "00592.000396/2021-13", "PE", "FEITO", "FEITO", "FEITO"], ["2024", "VIGILÂNCIA ORGÂNICA", "00592.000682/2023-32", "PE", "FEITO", "FEITO", "FEITO"], ["2024", "REMOÇÕES DE PAREDES E CONSTRUÇÃO DE DRYWALL", "00592.000138/2023-91", "DE", "NÃO TEM NECESSIDADE", "FEITO", "FEITO"], ["2024", "ADESIVOS, PLACAS DE INAUGURAÇÃO E IDENTIFICAÇÃO - PF ES", "00592.001049/2024-42", "DE", "NÃO TEM NECESSIDADE", "FEITO", "FEITO"], ["2024", "TÉCNICO EM SECRETARIADO", "00592.001334/2024-63", "PE", "FEITO", "FEITO", "FEITO"], ["2024", "SERVIÇOS DE ENGENHARIA PSF E PSU/CAMPOS", "00592.000726/2023-24", "PE", "FEITO", "FEITO", "FEITO"], ["2024", "APOIO ADMINISTRATIVO RJ", "00592.000722/2023-46", "PE", "FEITO", "FEITO", "FEITO"], ["2024", "SERVIÇOS DE ENGENHARIA PSU E PSF/NITERÓI", "00592.000727/2023-79", "PE", "FEITO", "FEITO", "FEITO"], ["2024", "LIMPEZA, CONSERVAÇÃO RIO DE JANEIRO", "00592.001007/2024-10", "PE", "FEITO", "FEITO", "FEITO"], ["2024", "GALÕES DE ÁGUA MINERAL - PSF E PSU / CPS", "00592.001148/2024-24", "DE", "FEITO", "FEITO", "FEITO"], ["2024", "REPAROS PREDIAIS - PF/ES", "00592.000953/2024-31", "PE", "FEITO", "FEITO", "FEITO"], ["2025", "REPAROS PREDIAIS PF/ES", "00592.000953/2024-31", "PE", "NÃO TEM", "NÃO TEM", "FEITO"], ["2025", "LIMPEZA, CONSERVAÇÃO RIO DE JANEIRO", "00592.001007/2024-10", "PE", "FEITO", "FEITO", "FEITO"], ["2025", "SERVIÇOS COMUNS DE ENGENHARIA PARA MANUTENÇÃO DE AR-CONDICIONADO ES", "00592.001461/2024-62", "DE", "FEITO", "FEITO, REVISAR", "FEITO"], ["2025", "SERVIÇOS DE ENGENHARIA PSU E PSF/NITERÓI", "00592.000727/2023-79", "PE", "NÃO TEM", "NÃO TEM", "FEITO"], ["2025", "APOIO ADMINISTRATIVO RJ / MONTADOR REMANEJADOR", "00592.000722/2023-46 / 00592.001439/2025-01", "PE", "FEITO", "FEITO", "FEITO"], ["2025", "SERVIÇOS DE COPEIRAGEM RJ E ES COM FORNECIMENTO DE MATERIAIS", "00592.001051/2025-01", "PE", "FEITO", "FEITO", "FEITO"], ["2025", "SERVIÇOS DE MANUTENÇÃO PREDIAL E DE MANUTENÇÃO DE AR-CONDICIONADO, UNIDADES AGU INTERIOR DO RJ", "00592.001462/2024-15", "PE", "FEITO", "FEITO, REVISAR", "FEITO"], ["2025", "SERVIÇOS CONTINUADOS DE LOCAÇÃO DE VEÍCULOS COM MOTORISTA E GERENCIAMENTO DE RISCO - RJ E ES", "00592.001468/2024-84", "PE", "FEITO", "FEITO", "FEITO"], ["2025", "SERVIÇOS DE DEDETIZAÇÃO PARA ATENDER AS UNIDADES DOS MUNICÍPIOS DO INTERIOR DO ESTADO DO RJ", "00592.001465/2024-41", "DE", "FEITO", "FEITO, REVISAR", "NÃO"], ["2025", "AQUISIÇÃO DE FILTROS DE LINHA E BATERIAS PARA A SEÇÃO DE ADMINISTRAÇÃO DA 2ª REGIÃO", "00592.001466/2024-95", "DE", "FEITO", "FEITO, REVISAR", "FEITO"], ["2025", "CONTRATAÇÃO DOS SERVIÇOS PARA FORNECIMENTO DE ÁGUA E ESGOTO EM VOLTA REDONDA", "00592.000923/2025-13", "INEX", "FEITO", "FEITO", "NÃO TEM"], ["2025", "FORNECIMENTO DE GALÕES DE ÁGUA MINERAL - PSF E PSU/CPS E SÃO MATEUS", "00592.001148/2024-24", "DE", "EM ANDAMENTO", "FEITO, REVISAR", "FEITO"], ["2025", "SERVIÇOS COMUNS DE ENGENHARIA PARA EXECUÇÃO DE NOVO LAYOUT - SALA DE AMAMENTAÇÃO NA PU/ES", "00592.001463/2024-51", "DE", "FEITO", "FEITO", "FEITO"], ["2025", "CONTRATAÇÃO DE EMPRESA PARA SERVIÇOS GRÁFICOS DIVERSOS", "00592.000730/2023-92", "DE", "NÃO TEM NECESSIDADE", "FEITO", "FEITO"], ["2025", "AQUISIÇÃO DE MOBILIÁRIO PARA SALA DE AMAMENTAÇÃO", "00592.001538/2024-02", "DE", "FEITO", "FEITO", "FEITO"], ["2026", "ASSISTENTE ADMINISTRATIVO PARA ATENDER AS UNIDADES NO ESTADO DO RIO DE JANEIRO E ESPÍRITO SANTO", "00592.001425/2025-80", "PE", "FEITO", "FEITO", "FEITO"], ["2026", "CONTRATAÇÃO SERVIÇOS COMUNS DE ENGENHARIA PARA MANUTENÇÃO DE AR-CONDICIONADO - UNIDADES DO ESPÍRITO SANTO", "00592.001461/2024-62", "DE", "FEITO", "FEITO", "FEITO"], ["2026", "LOCAÇÃO DE VEÍCULOS COM MOTORISTA E GERENCIAMENTO DE RISCO NO RIO DE JANEIRO", "00592.001468/2024-84", "PE", "FEITO", "FEITO", "FEITO"], ["2026", "SERVIÇOS CONTINUADOS DE LOCAÇÃO DE VEÍCULOS COM MOTORISTA E GERENCIAMENTO DE RISCO - ESPÍRITO SANTO", "00592.000927/2026-74", "PE", "FEITO", "FEITO", "NÃO"], ["2026", "SERVIÇOS PARA FORNECIMENTO DE ENERGIA ELÉTRICA PARA UNIDADES DE NRI, CPS, PTS", "00592.001228/2025-61", "INEX", "FEITO", "FEITO", "NÃO"], ["2026", "SERVIÇOS PARA FORNECIMENTO DE ENERGIA ELÉTRICA PARA UNIDADES DE VRD", "00592.001227/2025-16", "INEX", "FEITO", "FEITO", "NÃO TEM"], ["2026", "SERVIÇOS COMUNS DE ENGENHARIA PARA EXECUÇÃO DE NOVO LAYOUT - SALA DE AMAMENTAÇÃO NA PU/ES", "00592.001463/2024-51", "DE", "FEITO", "FEITO", "FEITO"], ["2026", "SERVIÇOS CONTINUADOS DE ASSISTENTE ADMINISTRATIVO - ESTADO DO ESPÍRITO SANTO", "00592.001425/2025-80", "PE", "FEITO", "FEITO", "FEITO"], ["2026", "AQUISIÇÃO DE MOBILIÁRIO PARA SALA DE AMAMENTAÇÃO UNIDADES DO RIO DE JANEIRO", "00592.001538/2024-02", "DE", "FEITO", "NÃO TEM", "FEITO"], ["2026", "EMERGENCIAL - SERVIÇOS DE MANUTENÇÃO DE AR-CONDICIONADO UNIDADES AGU INTERIOR DO RJ", "00592.000896/2026-51", "DE", "NÃO TEM NECESSIDADE", "EM MINUTA", "FEITO"], ["2026", "SERVIÇOS DE VIGILÂNCIA ORGÂNICA - INTERIOR DO RJ", "00592.000931/2026-32", "PE", "FEITO", "NÃO TEM", "NÃO"], ["2026", "SERVIÇOS DE FORNECIMENTO DE MATERIAIS DE COPEIRAGEM - RIO DE JANEIRO", "00592.000930/2026-98", "DE", "AINDA NÃO TEM ETP", "NÃO TEM", "NÃO TEM"], ["2026", "SERVIÇOS DE COPEIRAGEM COM FORNECIMENTO DE MATERIAIS - ESPÍRITO SANTO", "00592.001051/2025-01", "PE", "NÃO TEM", "NÃO TEM", "NÃO"], ["2026", "CONTRATAÇÃO DOS SERVIÇOS PARA FORNECIMENTO DE ÁGUA E ESGOTO EM VOLTA REDONDA", "00592.000923/2025-13", "INEX", "NÃO TEM", "FEITO", "NÃO TEM"]];
const years=["2023","2024","2025","2026"];
const metrics={
 total:data.length,
 etp:data.filter(r=>r[4]==="FEITO").length,
 tr:data.filter(r=>r[5]==="FEITO").length,
 minuta:data.filter(r=>r[6]==="FEITO").length,
 pregoes:data.filter(r=>r[3]==="PE").length,
 revisoes:data.filter(r=>r[5].includes("REVISAR")).length,
 andamento:data.filter(r=>r[4].includes("ANDAMENTO")).length
};
document.getElementById("metrics").innerHTML=[
 ["57","Processos registrados",""],
 [metrics.etp,"ETPs indicados como feitos","accent"],
 [metrics.tr,"Termos de Referência feitos","accent"],
 [metrics.minuta,"Minutas de edital feitas","accent"],
 [metrics.pregoes,"Pregões Eletrônicos (PE)","accent"]
].map(x=>`<div class="card"><div class="metric ${x[2]}">${x[0]}</div><div class="label">${x[1]}</div></div>`).join("");

function pct(a,b){return b?Math.round(a/b*100):0}
document.getElementById("yearChart").innerHTML=years.map(y=>{
 const n=data.filter(r=>r[0]===y).length;
 return `<div class="bar-row clickable" data-year="${y}" onclick="selectYear('${y}')"><b>${y}</b><div class="bar"><div class="fill" style="width:${pct(n,data.length)}%"></div></div><div class="bar-value">${n}</div></div>`
}).join("");

document.getElementById("insights").innerHTML=[
 [`Prioridade nos pregões`,`Foram registrados <b>${metrics.pregoes} pregões eletrônicos</b>, representando ${pct(metrics.pregoes,data.length)}% do levantamento. Isso evidencia a concentração do trabalho nessa modalidade.`],
 [`Produção documental`,`Há <b>${metrics.etp} ETPs</b>, <b>${metrics.tr} Termos de Referência</b> e <b>${metrics.minuta} Minutas de Edital</b> marcados como feitos na base fornecida.`],
 [`Continuidade e revisão`,`Foram identificados <b>${metrics.revisoes} casos</b> de Termo de Referência com indicação de revisão e <b>${metrics.andamento} ETP</b> em andamento, que merecem acompanhamento.`]
].map(x=>`<div class="insight"><b>${x[0]}</b>${x[1]}</div>`).join("");

const modalidades=[
 ["PE","Pregão Eletrônico","#155eef"],
 ["DE","Dispensa Eletrônica","#12b76a"],
 ["INEX","Inexigibilidade","#f79009"],
 ["DISP","Dispensa","#f04438"]
];
function renderModalidades(){
 const total=data.length;
 let start=0, stops=[];
 const counts=modalidades.map(m=>data.filter(r=>r[3]===m[0]).length);
 counts.forEach((n,i)=>{stops.push(`${modalidades[i][2]} ${start}% ${start+n/total*100}%`);start+=n/total*100;});
 document.getElementById("donutChart").style.background=`conic-gradient(${stops.join(",")})`;
 document.getElementById("donutChart").onclick=(e)=>{
   const rect=e.currentTarget.getBoundingClientRect();
   const x=e.clientX-(rect.left+rect.width/2), y=e.clientY-(rect.top+rect.height/2);
   const angle=(Math.atan2(y,x)*180/Math.PI+90+360)%360;
   const percent=angle/360*100;
   let acc=0;
   for(let i=0;i<counts.length;i++){let next=acc+counts[i]/total*100;if(percent>=acc&&percent<next){selectModal(modalidades[i][0]);break;}acc=next;}
 };
 document.getElementById("modalLegend").innerHTML=modalidades.map((m,i)=>{
   const n=counts[i];
   return `<div class="legend-item" data-modal="${m[0]}" onclick="selectModal('${m[0]}')"><span class="dot" style="background:${m[2]}"></span><b>${m[0]}</b> — ${m[1]} <strong>(${n})</strong></div>`;
 }).join("");
}
let activeModal="";
let activeYear="";
function showActiveFilter(){
 const toolbar=document.querySelector(".toolbar");
 let box=document.getElementById("activeFilter");
 if(!box){box=document.createElement("div");box.id="activeFilter";box.className="active-filter";toolbar.parentNode.insertBefore(box,toolbar);}
 if(activeModal||activeYear){
   const parts=[];
   if(activeModal) parts.push(`Modalidade: ${activeModal}`);
   if(activeYear) parts.push(`Ano: ${activeYear}`);
   box.innerHTML=`🔎 ${parts.join(" • ")} <button style="margin-left:auto;padding:7px 10px" onclick="clearFilters()">Limpar filtro</button>`;
   box.style.display="flex";
 }else box.style.display="none";
}
function selectModal(m){
 activeModal=m; activeYear="";
 document.getElementById("modFilter").value=m;
 document.getElementById("yearFilter").value="";
 document.querySelectorAll(".legend-item").forEach(x=>x.classList.toggle("active",x.dataset.modal===m));
 render(); showActiveFilter();
 document.getElementById("dataTable").closest(".table-wrap").scrollIntoView({behavior:"smooth",block:"start"});
}
function selectYear(y){
 activeYear=y; activeModal="";
 document.getElementById("yearFilter").value=y;
 document.getElementById("modFilter").value="";
 document.querySelectorAll(".legend-item").forEach(x=>x.classList.remove("active"));
 render(); showActiveFilter();
 document.getElementById("dataTable").closest(".table-wrap").scrollIntoView({behavior:"smooth",block:"start"});
}
function clearFilters(){
 activeModal="";activeYear="";
 document.getElementById("yearFilter").value="";
 document.getElementById("modFilter").value="";
 document.querySelectorAll(".legend-item").forEach(x=>x.classList.remove("active"));
 render();showActiveFilter();
}
renderModalidades();

document.getElementById("yearTable").innerHTML=years.map(y=>{
 const rows=data.filter(r=>r[0]===y);
 return `<tr><td><b>${y}</b></td><td>${rows.length}</td><td>${rows.filter(r=>r[4]==="FEITO").length}</td><td>${rows.filter(r=>r[5]==="FEITO").length}</td><td>${rows.filter(r=>r[6]==="FEITO").length}</td></tr>`
}).join("");

function badge(v){
 let c="neutral";
 if(v==="FEITO") c="done";
 else if(v.includes("REVISAR")) c="review";
 else if(v.includes("ANDAMENTO")||v.includes("MINUTA")) c="ongoing";
 else if(v==="NÃO"||v==="NÃO TEM"||v==="NÃO TEM NECESSIDADE"||v.includes("NÃO TEM")) c="no";
 return `<span class="badge ${c}">${v}</span>`;
}
function render(){
 const q=document.getElementById("search").value.toLowerCase();
 const y=document.getElementById("yearFilter").value;
 const m=document.getElementById("modFilter").value;
 const filtered=data.filter(r=>{
   const hay=r.join(" ").toLowerCase();
   return (!q||hay.includes(q))&&(!y||r[0]===y)&&(!m||r[3]===m);
 });
 document.getElementById("dataTable").innerHTML=filtered.map(r=>`<tr>
 <td><b>${r[0]}</b></td><td>${r[1]}</td><td>${r[2]}</td><td><b>${r[3]}</b></td>
 <td>${badge(r[4])}</td><td>${badge(r[5])}</td><td>${badge(r[6])}</td></tr>`).join("") ||
 `<tr><td colspan="7">Nenhum registro encontrado.</td></tr>`;
}
document.getElementById("search").addEventListener("input",render);
document.getElementById("yearFilter").addEventListener("change",()=>{activeYear=document.getElementById("yearFilter").value;activeModal="";render();showActiveFilter();});
document.getElementById("modFilter").addEventListener("change",()=>{activeModal=document.getElementById("modFilter").value;activeYear="";render();showActiveFilter();});

render();const data = [["2023", "ASSISTENTE ADMINISTRATIVO ES", "00592.000204/2022-41", "PE", "FEITO", "NÃO", "FEITO"], ["2023", "LOCAÇÃO DE VEÍCULOS", "00592.000216/2022-76", "PE", "NÃO", "NÃO", "FEITO"], ["2023", "CHAMAMENTO PÚBLICO", "00592.000621/2022-94 / 00592.001032/2024-95", "INEX", "NÃO", "NÃO", "NÃO TEM"], ["2023", "ADAPTAÇÃO PF ES", "00592.000184/2022-17", "PE", "No processo só tem 2022", "NÃO", "FEITO"], ["2023", "OUTSOURCING DE IMPRESSÃO - EMERGENCIAL", "00592.000349/2023-23", "DISP", "NÃO TEM NECESSIDADE", "NÃO", "NÃO"], ["2023", "LIMPEZA E CONSERVAÇÃO - PF ES", "00592.000200/2022-63", "PE", "NÃO", "NÃO", "FEITO"], ["2023", "COPEIRAGEM RJ", "00592.000128/2023-55", "PE", "NÃO", "NÃO", "FEITO"], ["2023", "5 LAUDOS DE MERCADO IMOBILIÁRIO", "00592.000462/2023-17", "DE", "NÃO TEM NECESSIDADE", "NÃO", "NÃO"], ["2023", "LICENÇAS DE SOFTWARE", "00592.000689/2023-54", "PE", "NÃO", "NÃO", "NÃO"], ["2023", "FORNECIMENTO COM INSTALAÇÃO AR CENTRAL", "00592.000278/2022-88", "PE", "NÃO", "NÃO", "FEITO"], ["2023", "MANUTENÇÃO DE ELEVADORES - VOLTA REDONDA", "00592.000626/2023-06", "DE", "NÃO TEM NECESSIDADE", "NÃO", "NÃO"], ["2023", "MANUTENÇÃO PREDIAL RJ", "00592.000830/2022-38", "PE", "NÃO", "NÃO", "FEITO"], ["2023", "AQUISIÇÃO DE CAFÉ", "00592.000587/2023-39", "DE", "NÃO TEM NECESSIDADE", "NÃO", "NÃO"], ["2023", "BATERIA NO BREAK", "00592.000044/2023-11", "DE", "NÃO TEM NECESSIDADE", "NÃO", "NÃO"], ["2023", "MOBILIÁRIO EM GERAL (CPS E PF/ES)", "00592.000599/2023-63", "PE", "NÃO", "NÃO", "FEITO"], ["2024", "EMERGENCIAL ASSISTENTE ADMINISTRATIVO - ES", "00592.000923/2024-24", "DE", "NÃO TEM NECESSIDADE", "FEITO", "NÃO"], ["2024", "EMERGENCIAL - VIGILÂNCIA ORGÂNICA", "00592.000940/2024-61", "DE", "NÃO TEM NECESSIDADE", "FEITO", "NÃO"], ["2024", "AQUISIÇÃO DE CAFÉ", "00592.000587/2023-39", "DE", "NÃO TEM NECESSIDADE", "FEITO", "FEITO"], ["2024", "ASSISTENTE ADMINISTRATIVO ES", "00592.000817/2023-60", "PE", "FEITO", "FEITO", "FEITO"], ["2024", "EMERGENCIAL LIMPEZA, CONSERVAÇÃO", "00592.001028/2024-27", "DE", "NÃO TEM NECESSIDADE", "FEITO", "FEITO"], ["2024", "MUDANÇA REGIONAL", "00592.000396/2021-13", "PE", "FEITO", "FEITO", "FEITO"], ["2024", "VIGILÂNCIA ORGÂNICA", "00592.000682/2023-32", "PE", "FEITO", "FEITO", "FEITO"], ["2024", "REMOÇÕES DE PAREDES E CONSTRUÇÃO DE DRYWALL", "00592.000138/2023-91", "DE", "NÃO TEM NECESSIDADE", "FEITO", "FEITO"], ["2024", "ADESIVOS, PLACAS DE INAUGURAÇÃO E IDENTIFICAÇÃO - PF ES", "00592.001049/2024-42", "DE", "NÃO TEM NECESSIDADE", "FEITO", "FEITO"], ["2024", "TÉCNICO EM SECRETARIADO", "00592.001334/2024-63", "PE", "FEITO", "FEITO", "FEITO"], ["2024", "SERVIÇOS DE ENGENHARIA PSF E PSU/CAMPOS", "00592.000726/2023-24", "PE", "FEITO", "FEITO", "FEITO"], ["2024", "APOIO ADMINISTRATIVO RJ", "00592.000722/2023-46", "PE", "FEITO", "FEITO", "FEITO"], ["2024", "SERVIÇOS DE ENGENHARIA PSU E PSF/NITERÓI", "00592.000727/2023-79", "PE", "FEITO", "FEITO", "FEITO"], ["2024", "LIMPEZA, CONSERVAÇÃO RIO DE JANEIRO", "00592.001007/2024-10", "PE", "FEITO", "FEITO", "FEITO"], ["2024", "GALÕES DE ÁGUA MINERAL - PSF E PSU / CPS", "00592.001148/2024-24", "DE", "FEITO", "FEITO", "FEITO"], ["2024", "REPAROS PREDIAIS - PF/ES", "00592.000953/2024-31", "PE", "FEITO", "FEITO", "FEITO"], ["2025", "REPAROS PREDIAIS PF/ES", "00592.000953/2024-31", "PE", "NÃO TEM", "NÃO TEM", "FEITO"], ["2025", "LIMPEZA, CONSERVAÇÃO RIO DE JANEIRO", "00592.001007/2024-10", "PE", "FEITO", "FEITO", "FEITO"], ["2025", "SERVIÇOS COMUNS DE ENGENHARIA PARA MANUTENÇÃO DE AR-CONDICIONADO ES", "00592.001461/2024-62", "DE", "FEITO", "FEITO, REVISAR", "FEITO"], ["2025", "SERVIÇOS DE ENGENHARIA PSU E PSF/NITERÓI", "00592.000727/2023-79", "PE", "NÃO TEM", "NÃO TEM", "FEITO"], ["2025", "APOIO ADMINISTRATIVO RJ / MONTADOR REMANEJADOR", "00592.000722/2023-46 / 00592.001439/2025-01", "PE", "FEITO", "FEITO", "FEITO"], ["2025", "SERVIÇOS DE COPEIRAGEM RJ E ES COM FORNECIMENTO DE MATERIAIS", "00592.001051/2025-01", "PE", "FEITO", "FEITO", "FEITO"], ["2025", "SERVIÇOS DE MANUTENÇÃO PREDIAL E DE MANUTENÇÃO DE AR-CONDICIONADO, UNIDADES AGU INTERIOR DO RJ", "00592.001462/2024-15", "PE", "FEITO", "FEITO, REVISAR", "FEITO"], ["2025", "SERVIÇOS CONTINUADOS DE LOCAÇÃO DE VEÍCULOS COM MOTORISTA E GERENCIAMENTO DE RISCO - RJ E ES", "00592.001468/2024-84", "PE", "FEITO", "FEITO", "FEITO"], ["2025", "SERVIÇOS DE DEDETIZAÇÃO PARA ATENDER AS UNIDADES DOS MUNICÍPIOS DO INTERIOR DO ESTADO DO RJ", "00592.001465/2024-41", "DE", "FEITO", "FEITO, REVISAR", "NÃO"], ["2025", "AQUISIÇÃO DE FILTROS DE LINHA E BATERIAS PARA A SEÇÃO DE ADMINISTRAÇÃO DA 2ª REGIÃO", "00592.001466/2024-95", "DE", "FEITO", "FEITO, REVISAR", "FEITO"], ["2025", "CONTRATAÇÃO DOS SERVIÇOS PARA FORNECIMENTO DE ÁGUA E ESGOTO EM VOLTA REDONDA", "00592.000923/2025-13", "INEX", "FEITO", "FEITO", "NÃO TEM"], ["2025", "FORNECIMENTO DE GALÕES DE ÁGUA MINERAL - PSF E PSU/CPS E SÃO MATEUS", "00592.001148/2024-24", "DE", "EM ANDAMENTO", "FEITO, REVISAR", "FEITO"], ["2025", "SERVIÇOS COMUNS DE ENGENHARIA PARA EXECUÇÃO DE NOVO LAYOUT - SALA DE AMAMENTAÇÃO NA PU/ES", "00592.001463/2024-51", "DE", "FEITO", "FEITO", "FEITO"], ["2025", "CONTRATAÇÃO DE EMPRESA PARA SERVIÇOS GRÁFICOS DIVERSOS", "00592.000730/2023-92", "DE", "NÃO TEM NECESSIDADE", "FEITO", "FEITO"], ["2025", "AQUISIÇÃO DE MOBILIÁRIO PARA SALA DE AMAMENTAÇÃO", "00592.001538/2024-02", "DE", "FEITO", "FEITO", "FEITO"], ["2026", "ASSISTENTE ADMINISTRATIVO PARA ATENDER AS UNIDADES NO ESTADO DO RIO DE JANEIRO E ESPÍRITO SANTO", "00592.001425/2025-80", "PE", "FEITO", "FEITO", "FEITO"], ["2026", "CONTRATAÇÃO SERVIÇOS COMUNS DE ENGENHARIA PARA MANUTENÇÃO DE AR-CONDICIONADO - UNIDADES DO ESPÍRITO SANTO", "00592.001461/2024-62", "DE", "FEITO", "FEITO", "FEITO"], ["2026", "LOCAÇÃO DE VEÍCULOS COM MOTORISTA E GERENCIAMENTO DE RISCO NO RIO DE JANEIRO", "00592.001468/2024-84", "PE", "FEITO", "FEITO", "FEITO"], ["2026", "SERVIÇOS CONTINUADOS DE LOCAÇÃO DE VEÍCULOS COM MOTORISTA E GERENCIAMENTO DE RISCO - ESPÍRITO SANTO", "00592.000927/2026-74", "PE", "FEITO", "FEITO", "NÃO"], ["2026", "SERVIÇOS PARA FORNECIMENTO DE ENERGIA ELÉTRICA PARA UNIDADES DE NRI, CPS, PTS", "00592.001228/2025-61", "INEX", "FEITO", "FEITO", "NÃO"], ["2026", "SERVIÇOS PARA FORNECIMENTO DE ENERGIA ELÉTRICA PARA UNIDADES DE VRD", "00592.001227/2025-16", "INEX", "FEITO", "FEITO", "NÃO TEM"], ["2026", "SERVIÇOS COMUNS DE ENGENHARIA PARA EXECUÇÃO DE NOVO LAYOUT - SALA DE AMAMENTAÇÃO NA PU/ES", "00592.001463/2024-51", "DE", "FEITO", "FEITO", "FEITO"], ["2026", "SERVIÇOS CONTINUADOS DE ASSISTENTE ADMINISTRATIVO - ESTADO DO ESPÍRITO SANTO", "00592.001425/2025-80", "PE", "FEITO", "FEITO", "FEITO"], ["2026", "AQUISIÇÃO DE MOBILIÁRIO PARA SALA DE AMAMENTAÇÃO UNIDADES DO RIO DE JANEIRO", "00592.001538/2024-02", "DE", "FEITO", "NÃO TEM", "FEITO"], ["2026", "EMERGENCIAL - SERVIÇOS DE MANUTENÇÃO DE AR-CONDICIONADO UNIDADES AGU INTERIOR DO RJ", "00592.000896/2026-51", "DE", "NÃO TEM NECESSIDADE", "EM MINUTA", "FEITO"], ["2026", "SERVIÇOS DE VIGILÂNCIA ORGÂNICA - INTERIOR DO RJ", "00592.000931/2026-32", "PE", "FEITO", "NÃO TEM", "NÃO"], ["2026", "SERVIÇOS DE FORNECIMENTO DE MATERIAIS DE COPEIRAGEM - RIO DE JANEIRO", "00592.000930/2026-98", "DE", "AINDA NÃO TEM ETP", "NÃO TEM", "NÃO TEM"], ["2026", "SERVIÇOS DE COPEIRAGEM COM FORNECIMENTO DE MATERIAIS - ESPÍRITO SANTO", "00592.001051/2025-01", "PE", "NÃO TEM", "NÃO TEM", "NÃO"], ["2026", "CONTRATAÇÃO DOS SERVIÇOS PARA FORNECIMENTO DE ÁGUA E ESGOTO EM VOLTA REDONDA", "00592.000923/2025-13", "INEX", "NÃO TEM", "FEITO", "NÃO TEM"]];
const years=["2023","2024","2025","2026"];
const metrics={
 total:data.length,
 etp:data.filter(r=>r[4]==="FEITO").length,
 tr:data.filter(r=>r[5]==="FEITO").length,
 minuta:data.filter(r=>r[6]==="FEITO").length,
 pregoes:data.filter(r=>r[3]==="PE").length,
 revisoes:data.filter(r=>r[5].includes("REVISAR")).length,
 andamento:data.filter(r=>r[4].includes("ANDAMENTO")).length
};
document.getElementById("metrics").innerHTML=[
 ["57","Processos registrados",""],
 [metrics.etp,"ETPs indicados como feitos","accent"],
 [metrics.tr,"Termos de Referência feitos","accent"],
 [metrics.minuta,"Minutas de edital feitas","accent"],
 [metrics.pregoes,"Pregões Eletrônicos (PE)","accent"]
].map(x=>`<div class="card"><div class="metric ${x[2]}">${x[0]}</div><div class="label">${x[1]}</div></div>`).join("");

function pct(a,b){return b?Math.round(a/b*100):0}
document.getElementById("yearChart").innerHTML=years.map(y=>{
 const n=data.filter(r=>r[0]===y).length;
 return `<div class="bar-row clickable" data-year="${y}" onclick="selectYear('${y}')"><b>${y}</b><div class="bar"><div class="fill" style="width:${pct(n,data.length)}%"></div></div><div class="bar-value">${n}</div></div>`
}).join("");

document.getElementById("insights").innerHTML=[
 [`Prioridade nos pregões`,`Foram registrados <b>${metrics.pregoes} pregões eletrônicos</b>, representando ${pct(metrics.pregoes,data.length)}% do levantamento. Isso evidencia a concentração do trabalho nessa modalidade.`],
 [`Produção documental`,`Há <b>${metrics.etp} ETPs</b>, <b>${metrics.tr} Termos de Referência</b> e <b>${metrics.minuta} Minutas de Edital</b> marcados como feitos na base fornecida.`],
 [`Continuidade e revisão`,`Foram identificados <b>${metrics.revisoes} casos</b> de Termo de Referência com indicação de revisão e <b>${metrics.andamento} ETP</b> em andamento, que merecem acompanhamento.`]
].map(x=>`<div class="insight"><b>${x[0]}</b>${x[1]}</div>`).join("");

const modalidades=[
 ["PE","Pregão Eletrônico","#155eef"],
 ["DE","Dispensa Eletrônica","#12b76a"],
 ["INEX","Inexigibilidade","#f79009"],
 ["DISP","Dispensa","#f04438"]
];
function renderModalidades(){
 const total=data.length;
 let start=0, stops=[];
 const counts=modalidades.map(m=>data.filter(r=>r[3]===m[0]).length);
 counts.forEach((n,i)=>{stops.push(`${modalidades[i][2]} ${start}% ${start+n/total*100}%`);start+=n/total*100;});
 document.getElementById("donutChart").style.background=`conic-gradient(${stops.join(",")})`;
 document.getElementById("donutChart").onclick=(e)=>{
   const rect=e.currentTarget.getBoundingClientRect();
   const x=e.clientX-(rect.left+rect.width/2), y=e.clientY-(rect.top+rect.height/2);
   const angle=(Math.atan2(y,x)*180/Math.PI+90+360)%360;
   const percent=angle/360*100;
   let acc=0;
   for(let i=0;i<counts.length;i++){let next=acc+counts[i]/total*100;if(percent>=acc&&percent<next){selectModal(modalidades[i][0]);break;}acc=next;}
 };
 document.getElementById("modalLegend").innerHTML=modalidades.map((m,i)=>{
   const n=counts[i];
   return `<div class="legend-item" data-modal="${m[0]}" onclick="selectModal('${m[0]}')"><span class="dot" style="background:${m[2]}"></span><b>${m[0]}</b> — ${m[1]} <strong>(${n})</strong></div>`;
 }).join("");
}
let activeModal="";
let activeYear="";
function showActiveFilter(){
 const toolbar=document.querySelector(".toolbar");
 let box=document.getElementById("activeFilter");
 if(!box){box=document.createElement("div");box.id="activeFilter";box.className="active-filter";toolbar.parentNode.insertBefore(box,toolbar);}
 if(activeModal||activeYear){
   const parts=[];
   if(activeModal) parts.push(`Modalidade: ${activeModal}`);
   if(activeYear) parts.push(`Ano: ${activeYear}`);
   box.innerHTML=`🔎 ${parts.join(" • ")} <button style="margin-left:auto;padding:7px 10px" onclick="clearFilters()">Limpar filtro</button>`;
   box.style.display="flex";
 }else box.style.display="none";
}
function selectModal(m){
 activeModal=m; activeYear="";
 document.getElementById("modFilter").value=m;
 document.getElementById("yearFilter").value="";
 document.querySelectorAll(".legend-item").forEach(x=>x.classList.toggle("active",x.dataset.modal===m));
 render(); showActiveFilter();
 document.getElementById("dataTable").closest(".table-wrap").scrollIntoView({behavior:"smooth",block:"start"});
}
function selectYear(y){
 activeYear=y; activeModal="";
 document.getElementById("yearFilter").value=y;
 document.getElementById("modFilter").value="";
 document.querySelectorAll(".legend-item").forEach(x=>x.classList.remove("active"));
 render(); showActiveFilter();
 document.getElementById("dataTable").closest(".table-wrap").scrollIntoView({behavior:"smooth",block:"start"});
}
function clearFilters(){
 activeModal="";activeYear="";
 document.getElementById("yearFilter").value="";
 document.getElementById("modFilter").value="";
 document.querySelectorAll(".legend-item").forEach(x=>x.classList.remove("active"));
 render();showActiveFilter();
}
renderModalidades();

document.getElementById("yearTable").innerHTML=years.map(y=>{
 const rows=data.filter(r=>r[0]===y);
 return `<tr><td><b>${y}</b></td><td>${rows.length}</td><td>${rows.filter(r=>r[4]==="FEITO").length}</td><td>${rows.filter(r=>r[5]==="FEITO").length}</td><td>${rows.filter(r=>r[6]==="FEITO").length}</td></tr>`
}).join("");

function badge(v){
 let c="neutral";
 if(v==="FEITO") c="done";
 else if(v.includes("REVISAR")) c="review";
 else if(v.includes("ANDAMENTO")||v.includes("MINUTA")) c="ongoing";
 else if(v==="NÃO"||v==="NÃO TEM"||v==="NÃO TEM NECESSIDADE"||v.includes("NÃO TEM")) c="no";
 return `<span class="badge ${c}">${v}</span>`;
}
function render(){
 const q=document.getElementById("search").value.toLowerCase();
 const y=document.getElementById("yearFilter").value;
 const m=document.getElementById("modFilter").value;
 const filtered=data.filter(r=>{
   const hay=r.join(" ").toLowerCase();
   return (!q||hay.includes(q))&&(!y||r[0]===y)&&(!m||r[3]===m);
 });
 document.getElementById("dataTable").innerHTML=filtered.map(r=>`<tr>
 <td><b>${r[0]}</b></td><td>${r[1]}</td><td>${r[2]}</td><td><b>${r[3]}</b></td>
 <td>${badge(r[4])}</td><td>${badge(r[5])}</td><td>${badge(r[6])}</td></tr>`).join("") ||
 `<tr><td colspan="7">Nenhum registro encontrado.</td></tr>`;
}
document.getElementById("search").addEventListener("input",render);
document.getElementById("yearFilter").addEventListener("change",()=>{activeYear=document.getElementById("yearFilter").value;activeModal="";render();showActiveFilter();});
document.getElementById("modFilter").addEventListener("change",()=>{activeModal=document.getElementById("modFilter").value;activeYear="";render();showActiveFilter();});

render();
