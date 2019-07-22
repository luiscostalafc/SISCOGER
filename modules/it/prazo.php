<?php
include("controle_acesso.php");
include ("menu.inc");
//include ("filtro.inc");

//echo "<br>";

if (!$_REQUEST['order']) $_REQUEST['order']="it.id_it DESC";
//sql do modulo
$sql="SELECT DISTINCT it.id_it, andamento, 
	(
		SELECT  motivo
		FROM    sobrestamento
		WHERE   sobrestamento.id_it=it.id_it 
		ORDER BY sobrestamento.id_sobrestamento DESC
		LIMIT 1
	) AS motivo,  
	(
		SELECT  motivo_outros
		FROM    sobrestamento
		WHERE   sobrestamento.id_it=it.id_it 
		ORDER BY sobrestamento.id_sobrestamento DESC
		LIMIT 1
	) AS motivo_outros, 
	envolvido.cargo, envolvido.nome, cdopm, 
	opm.ABREVIATURA, sjd_ref, sjd_ref_ano, abertura_data, DIASUTEIS(abertura_data,DATE(NOW())) AS dutotal, 
	b.dusobrestado, 
	(DIASUTEIS(abertura_data,DATE(NOW()))-IFNULL(b.dusobrestado,0)) AS diasuteis FROM it
	LEFT JOIN
	(SELECT id_it, SUM(DIASUTEIS(inicio_data, termino_data)+1) AS dusobrestado FROM sobrestamento
		WHERE termino_data !='0000-00-00' AND id_it!='' 
		GROUP BY id_it) b	
		ON b.id_it = it.id_it
	LEFT JOIN RHPARANA.opmPMPR opm ON
		opm.CODIGOBASE=it.cdopm
	LEFT JOIN envolvido ON
		envolvido.id_it=it.id_it AND envolvido.situacao='Encarregado' AND rg_substituto=''
	LEFT JOIN andamento ON
		andamento.id_andamento=it.id_andamento
	";

//Filtro usuarios locais
if ($user[nivel]<4) {
	if (!$it->cdopm_st) $it->cdopm_st=$opm_login->codigoBase;
}
/*acesso a visualização
if ($acesso_liberado) {
	if (!$it->cdopm_st) $it->cdopm_st=$opm_login->codigoBase;
}*/
//Filtro somente procedimentos do ano
$it->sjd_ref_ano_eq=$_SESSION['sjd_ano'];

$_REQUEST['orderby']="it.id_it DESC";

include ("includes/filtro.php");

if ($_SESSION['debug']) pre($sql);

//pre($sql); die;

$res=mysql_query($sql);

h1("PRAZO DOS INQU&Eacute;RITOS T&Eacute;CNICOS");
openTable("width='100%' class='bordasimples'");
	openLine(7);
		h2("Calculo do prazo dos it - em dias uteis, EXCLUI-SE o primeiro dia. (Portaria 869)<br> Sao descontados os dias em que o procedimento ficou sobrestado.<br> Data de refer&ecirc;ncia: HOJE (".date("d/m/Y").")");
	closeLine();
	
	openTR();
		lista::td("N&ordm; COGER","sjd_ref");
		lista::td("OPM","cdopm");
		lista::td("Abertura","abertura_data");
		lista::td("Encarregado","nome");
		//lista::td("Dias &Uacute;teis-Total","dutotal");
		lista::td("Andamento","andamento");
		lista::td("Sobrest.","dusobrestado");
		lista::td("Motivo Sobrest.","motivo");
		lista::td("Prazo decorrido","diasuteis");
	closeTR();
	
	$i=0; //contador
	while ($row=mysql_fetch_assoc($res)) {
		($i%2)?($cor="white"):($cor="#F0F0F0");
		openTR("bgcolor='$cor'");
			echo "<td>".lista::link("atualizar")."$row[sjd_ref]/$row[sjd_ref_ano]</td>";
			echo "<td>$row[ABREVIATURA]</td>";
			echo "<td>".udf($row['abertura_data'],"data")."</td>";
			echo "<td>$row[cargo] $row[nome]</td>";
			//if ($row["dutotal"]) echo "<td>$row[dutotal]</td>";
			//else echo "<td bgcolor='salmon'>S/Data abertura</td>";
			
			echo "<td>$row[andamento]</td>";
			echo "<td>$row[dusobrestado]</td>";
			//motivo do sobrestamento
			if ($row["andamento"]=="SOBRESTADO") 
			{
				if ($row["motivo"]=="" || $row["motivo"]=="outros") 
				{
					echo "<td>$row[motivo_outros]</td>";
				}
				else
				{
					echo "<td>$row[motivo]</td>";
				}
			} else {
				echo "<td>N&atilde;o Sobrest.</td>";
			}
			//andamento
			if ($row["andamento"]=="ANDAMENTO") {
				if ($row['dutotal']) {
					if ($row["diasuteis"]>40) echo "<td bgcolor='salmon'>$row[diasuteis]</td>";
					else echo "<td>$row[diasuteis]</td>";
				}
				else echo "<td bgcolor='#FFD700'>S/Data abertura</td>";
			}
			elseif ($row["andamento"]=="CONCLUÍDO") {
				echo "<td bgcolor='#8FBC8F'>Concluido</td>";
			}
			elseif ($row["andamento"]=="") {
				echo "<td bgcolor='#FFD700'>S/Andamento</td>";
			}
			elseif ($row["andamento"]=="SOBRESTADO") {
				echo "<td bgcolor='#FFEFD5'>Sobrestado</td>";
			}
			
		closeTR();
	$i++;
	}
	
closeTable();



?>
