<?php 
		if(isset( $_POST["complete_test"])){
			for ($i=0; $i < 30; $i++) { 
				if(isset( $_POST['q'][$i])){
					if ($_POST['q'][$i] == '1'){
						$sum ++;
					} 
				} else {
					echo "Вы ответили не на все вопросы.";
					$sum = null;
					break;
				}
			}
			if($sum != null) {
				if ($sum<=30 && $sum>=26){
			        echo "Вы набрали:  $sum правильных ответов. ";
			        echo "Ваш уровень знания языка соответствует
	 - C2";
			    }

			    if ($sum<=25 && $sum>=21) {
			        echo "Вы набрали:  $sum правильных ответов. ";
			        echo "Ваш уровень знания языка соответствует
	 - C1";
			    } 

			    if ($sum<=20 && $sum>=16){
			    	echo "Вы набрали:  $sum правильных ответов. ";
			    	echo "Ваш уровень знания языка соответствует
	 - B2";
			    }

			    if ($sum<=15 && $sum>=11){
			        echo "Вы набрали:  $sum правильных ответов. ";
			        echo "Ваш уровень знания языка соответствует
	 - B1";
			    }

			    if ($sum<=10 && $sum>=6){
			        echo "Вы набрали:  $sum правильных ответов. ";
			        echo "Ваш уровень знания языка соответствует
	 - A2";
			    }

			    if ($sum<=5 && $sum>=0){
			    	echo "Вы набрали:  $sum правильных ответов. ";
			    	echo "Ваш уровень знания языка соответствует
	 - A1";        
			    }
			}
		}
	?>	