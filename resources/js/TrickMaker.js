function submit() 
{

	// Body Spin variables
	var bodySpinArray = [];
	var bodySpin_noneEnabled = document.getElementById("bodySpin_toggleNone").checked;
	var bodySpin_FS180Enabled = document.getElementById("bodySpin_toggleFS180").checked;
	var bodySpin_BS180Enabled = document.getElementById("bodySpin_toggleBS180").checked;
	var bodySpin_FS360Enabled = document.getElementById("bodySpin_toggleFS360").checked;
	var bodySpin_BS360Enabled = document.getElementById("bodySpin_toggleBS360").checked;
	// End body SPIN Variables

	// STANCE Variables
	var stanceArray = [];
	var stance_StandardEnabled = document.getElementById("stance_toggleStandard").checked;
	var stance_SwitchEnabled = document.getElementById("stance_toggleSwitch").checked;
	var stance_FakieEnabled = document.getElementById("stance_toggleFakie").checked;
	var stance_NollieEnabled = document.getElementById("stance_toggleNollie").checked;
	// End STANCE Variables
	
	// Trick variables
	var trickArray = [];
	var trick_ollieEnabled = document.getElementById("trick_toggleOllie").checked;
	var trick_kickflipEnabled = document.getElementById("trick_toggleKickflip").checked;
	var trick_heelflipEnabled = document.getElementById("trick_toggleHeelflip").checked;
	//var trick_shuvItEnabled = document.getElementById("trick_toggleShuvit").checked;
	// End TRICK Variables
	
	// Board Spin variables
	var boardSpinArray = [];
	var boardSpin_noneEnabled = document.getElementById("boardSpin_toggleNone").checked;
	var boardSpin_FS180Enabled = document.getElementById("boardSpin_toggleFS180").checked;
	var boardSpin_BS180Enabled = document.getElementById("boardSpin_toggleBS180").checked;
	var boardSpin_FS360Enabled = document.getElementById("boardSpin_toggleFS360").checked;
	var boardSpin_BS360Enabled = document.getElementById("boardSpin_toggleBS360").checked;
	// End BOARD SPIN Variables
	
	
	
	// Body Spin //
		//None
		if (bodySpin_noneEnabled == true)
		{
			bodySpinArray.push(""); // no spin
		}
		
		//FS 180
		if (bodySpin_FS180Enabled == true)
		{
			bodySpinArray.push("FS 180");
		}
		
		//BS 180
		if (bodySpin_BS180Enabled == true)
		{
			bodySpinArray.push("BS 180");
		}
		
		//FS 360
		if (bodySpin_FS360Enabled == true)
		{
			bodySpinArray.push("FS 360");
		}
		
		//BS 360
		if (bodySpin_BS360Enabled == true)
		{
			bodySpinArray.push("BS 360");
		}
	// End Body Spin //
	
	
	// Stance //
		// Standard
		if (stance_StandardEnabled == true)
		{
			stanceArray.push(""); // standard
		}
		
		// Switch
		if (stance_SwitchEnabled == true)
		{
			stanceArray.push("Switch");
		}
		
		// Fakie
		if (stance_FakieEnabled == true)
		{
			stanceArray.push("Fakie");
		}
		
		// Nollie
		if (stance_NollieEnabled == true)
		{
			stanceArray.push("Nollie");
		}
	
	// Tricks //
		//Ollie
		if (trick_ollieEnabled == true)
		{
			trickArray.push("Ollie");
		}
		
		// Kickflip 
		if (trick_kickflipEnabled == true)
		{
			trickArray.push("Kickflip");
		}
		
		// Heelflip
		if (trick_heelflipEnabled == true)
		{
			trickArray.push("Heelflip");
		}
		
		/*
		// Shuv-It
		if (trick_shuvItEnabled == true)
		{
			trickArray.push("Pop Shuv-It");
		}
		*/
	// End Tricks //
	
	// Board Spin //
		//None
		if (boardSpin_noneEnabled == true)
		{
			boardSpinArray.push(""); //no spin
		}
		
		//FS 180
		if (boardSpin_FS180Enabled == true)
		{
			boardSpinArray.push("FS 180 Shuv-It");
		}
		
		//BS 180
		if (boardSpin_BS180Enabled == true)
		{
			boardSpinArray.push("BS 180 Shuv-It");
		}
		
		//FS 360
		if (boardSpin_FS360Enabled == true)
		{
			boardSpinArray.push("FS 360 Shuv-It");
		}
		
		//BS 360
		if (boardSpin_BS360Enabled == true)
		{
			boardSpinArray.push("BS 360 Shuv-It");
		}
	// End Board Spin //
	
	// Output
	if (trickArray.length == 0 | stanceArray.length == 0 | boardSpinArray.length == 0)
	{
		window.alert("Please ensure at least one item from each section is selected!")
	}
	else
	{
		// body spin
		var randBodySpin = Math.floor((Math.random() * bodySpinArray.length));
		var currentBodySpin = bodySpinArray[randBodySpin]
		
		// stance
		var randStance = Math.floor((Math.random() * stanceArray.length));
		var currentStance = stanceArray[randStance]
				
		// trick
		var randTrick = Math.floor((Math.random() * trickArray.length));
		var currentTrick = trickArray[randTrick]
		
		// board spin
		var randBoardSpin = Math.floor((Math.random() * boardSpinArray.length));
		var currentBoardSpin = boardSpinArray[randBoardSpin]
		
		// output
		if (currentTrick == "Ollie" && (currentStance == "Nollie" || currentBoardSpin != ""))
		{
			currentTrick = ""
		}
		document.getElementById("ClickButton").value = currentBodySpin + " " + currentStance + " " + currentBoardSpin + " " + currentTrick;
		//window.alert("Your Trick: " + currentBodySpin + " " + currentStance + " " + currentBoardSpin + " " + currentTrick);
	}

}