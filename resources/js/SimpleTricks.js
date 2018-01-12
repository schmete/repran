
//Stance Checkboxes
function checkStance()
{
	document.getElementById("stance_toggleStandard").checked = true;
	document.getElementById("stance_toggleSwitch").checked = true;
	document.getElementById("stance_toggleFakie").checked = true;
	document.getElementById("stance_toggleNollie").checked = true;
}

function uncheckStance()
{
	document.getElementById("stance_toggleStandard").checked = false;
	document.getElementById("stance_toggleSwitch").checked = false;
	document.getElementById("stance_toggleFakie").checked = false;
	document.getElementById("stance_toggleNollie").checked = false;
}

//Basic Checkboxes
function checkBasic() 
{
    document.getElementById("basic_Ollie").checked = true;
	document.getElementById("basic_Bs180").checked = true;
	document.getElementById("basic_Fs180").checked = true;
	document.getElementById("basic_BsShuv").checked = true;
	document.getElementById("basic_FsShuv").checked = true;
	document.getElementById("basic_Kickflip").checked = true;
	document.getElementById("basic_Heelflip").checked = true;
	document.getElementById("basic_VarialKickflip").checked = true;
	document.getElementById("basic_VarialHeelflip").checked = true;
	document.getElementById("basic_Hardflip").checked = true;
	document.getElementById("basic_InwardHeelflip").checked = true;
}

function uncheckBasic()
{
    document.getElementById("basic_Ollie").checked = false;
	document.getElementById("basic_Bs180").checked = false;
	document.getElementById("basic_Fs180").checked = false;
	document.getElementById("basic_BsShuv").checked = false;
	document.getElementById("basic_FsShuv").checked = false;
	document.getElementById("basic_Kickflip").checked = false;
	document.getElementById("basic_Heelflip").checked = false;
	document.getElementById("basic_VarialKickflip").checked = false;
	document.getElementById("basic_VarialHeelflip").checked = false;
	document.getElementById("basic_Hardflip").checked = false;
	document.getElementById("basic_InwardHeelflip").checked = false;
}

//Intermediate Checkboxes
function checkIntermediate()
{
	document.getElementById("Intermediate_DoubleKickflip").checked = true;
	document.getElementById("Intermediate_DoubleHeelflip").checked = true;
	document.getElementById("Intermediate_BS360Shuv").checked = true;
	document.getElementById("Intermediate_FS360Shuv").checked = true;
	document.getElementById("Intermediate_BsKickflip").checked = true;
	document.getElementById("Intermediate_FsKickflip").checked = true;
	document.getElementById("Intermediate_BsHeelflip").checked = true;
	document.getElementById("Intermediate_FsHeelflip").checked = true;
	document.getElementById("Intermediate_TreFlip").checked = true;
	document.getElementById("Intermediate_LaserFlip").checked = true;
	document.getElementById("Intermediate_360Hardflip").checked = true;
	document.getElementById("Intermediate_360InwardHeelflip").checked = true;
}

function uncheckIntermediate()
{
    document.getElementById("Intermediate_DoubleKickflip").checked = false;
	document.getElementById("Intermediate_DoubleHeelflip").checked = false;
	document.getElementById("Intermediate_BS360Shuv").checked = false;
	document.getElementById("Intermediate_FS360Shuv").checked = false;
	document.getElementById("Intermediate_BsKickflip").checked = false;
	document.getElementById("Intermediate_FsKickflip").checked = false;
	document.getElementById("Intermediate_BsHeelflip").checked = false;
	document.getElementById("Intermediate_FsHeelflip").checked = false;
	document.getElementById("Intermediate_TreFlip").checked = false;
	document.getElementById("Intermediate_LaserFlip").checked = false;
	document.getElementById("Intermediate_360Hardflip").checked = false;
	document.getElementById("Intermediate_360InwardHeelflip").checked = false;
}

function submit() 
{
	// STANCE Variables
	var stanceArray = [];
	var stance_StandardEnabled = document.getElementById("stance_toggleStandard").checked;
	var stance_SwitchEnabled = document.getElementById("stance_toggleSwitch").checked;
	var stance_FakieEnabled = document.getElementById("stance_toggleFakie").checked;
	var stance_NollieEnabled = document.getElementById("stance_toggleNollie").checked;
	// End STANCE Variables
	
	// Trick variables
	var trickArray = [];
	// Basic
	var basic_OllieEnabled = document.getElementById("basic_Ollie").checked;
	var basic_Bs180Enabled = document.getElementById("basic_Bs180").checked;
	var basic_Fs180Enabled = document.getElementById("basic_Fs180").checked;
	var basic_BsShuvEnabled = document.getElementById("basic_BsShuv").checked;
	var basic_FsShuvEnabled = document.getElementById("basic_FsShuv").checked;
	var basic_KickflipEnabled = document.getElementById("basic_Kickflip").checked;
	var basic_HeelflipEnabled = document.getElementById("basic_Heelflip").checked;
	var basic_VarialKickflipEnabled = document.getElementById("basic_VarialKickflip").checked;
	var basic_VarialHeelflipEnabled = document.getElementById("basic_VarialHeelflip").checked;
	var basic_HardflipEnabled = document.getElementById("basic_Hardflip").checked;
	var basic_InwardHeelflipEnabled = document.getElementById("basic_InwardHeelflip").checked;
	
	//Intermediate
	var Intermediate_DoubleKickflipEnabled = document.getElementById("Intermediate_DoubleKickflip").checked;
	var Intermediate_DoubleHeelflipEnabled = document.getElementById("Intermediate_DoubleHeelflip").checked;
	var Intermediate_BS360ShuvEnabled = document.getElementById("Intermediate_BS360Shuv").checked;
	var Intermediate_FS360ShuvEnabled = document.getElementById("Intermediate_FS360Shuv").checked;
	var Intermediate_BsKickflipEnabled = document.getElementById("Intermediate_BsKickflip").checked;
	var Intermediate_FsKickflipEnabled = document.getElementById("Intermediate_FsKickflip").checked;
	var Intermediate_BsHeelflipEnabled = document.getElementById("Intermediate_BsHeelflip").checked;
	var Intermediate_FsHeelflipEnabled = document.getElementById("Intermediate_FsHeelflip").checked;
	var Intermediate_TreFlipEnabled = document.getElementById("Intermediate_TreFlip").checked;
	var Intermediate_LaserFlipEnabled = document.getElementById("Intermediate_LaserFlip").checked;
	var Intermediate_360HardflipEnabled = document.getElementById("Intermediate_360Hardflip").checked;
	var Intermediate_360InwardHeelflipEnabled = document.getElementById("Intermediate_360InwardHeelflip").checked;
	// End Trick variables

	// Stance //
	if (1==1){ // stance - only using to collapse section
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
	}
	
	// Basic //
	if (1==1) { // basic - only using to collapse section
		//Ollie
		if (basic_OllieEnabled == true)
		{
			trickArray.push("Ollie");
		}
		
		//BS 180
		if (basic_Bs180Enabled == true)
		{
			trickArray.push("Backside 180");
		}
		
		//FS 180
		if (basic_Fs180Enabled == true)
		{
			trickArray.push("Frontside 180");
		}
		
		//BS Shuv
		if (basic_BsShuvEnabled == true)
		{
			trickArray.push("BS Pop Shuv-It");
		}
		
		//FS Shuv
		if (basic_FsShuvEnabled == true)
		{
			trickArray.push("FS Pop Shuv-It");
		}
		
		// Kickflip 
		if (basic_KickflipEnabled == true)
		{
			trickArray.push("Kickflip");
		}
		
		// Heelflip
		if (basic_HeelflipEnabled == true)
		{
			trickArray.push("Heelflip");
		}
		
		// Varial Kickflip 
		if (basic_VarialKickflipEnabled == true)
		{
			trickArray.push("Varial Kickflip");
		}
		
		// Varial Heelflip
		if (basic_VarialHeelflipEnabled == true)
		{
			trickArray.push("Varial Heelflip");
		}
		
		// Hardflip
		if (basic_HardflipEnabled == true)
		{
			trickArray.push("Hardflip");
		}
		
		// 360 Inward Heelflip
		if (basic_InwardHeelflipEnabled == true)
		{
			trickArray.push("Inward Heelflip");
		}
	}
	// End Basic //
	
	// Intermediate //
	if (1==1) { // intermediate - only using to collapse section
		//BS 360 Pop Shuvit
		if (Intermediate_BS360ShuvEnabled == true)
		{
			trickArray.push("BS 360 Pop Shuvit");
		}
		
		//FS 360 Pop Shuvit
		if (Intermediate_FS360ShuvEnabled == true)
		{
			trickArray.push("FS 360 Pop Shuvit");
		}
		
		// Backside Kickflip
		if (Intermediate_BsKickflipEnabled == true)
		{
			trickArray.push("Backside Kickflip");
		}
		
		// Frontside Kickflip
		if (Intermediate_FsKickflipEnabled == true)
		{
			trickArray.push("Frontside Kickflip");
		}
		
		// Backside Heelflip
		if (Intermediate_BsHeelflipEnabled == true)
		{
			trickArray.push("Backside Heelflip");
		}
		
		// Frontside Heelflip
		if (Intermediate_FsHeelflipEnabled == true)
		{
			trickArray.push("Frontside Heelflip");
		}
		
		// Tre Flip
		if (Intermediate_TreFlipEnabled == true)
		{
			trickArray.push("Tre Flip");
		}
		
		// Laser Flip
		if (Intermediate_LaserFlipEnabled == true)
		{
			trickArray.push("Laser Flip");
		}
		
		// 360 Hardflip
		if (Intermediate_360HardflipEnabled == true)
		{
			trickArray.push("360 Hardflip");
		}
		
		// 360 Inward Heelflip
		if (Intermediate_360InwardHeelflipEnabled == true)
		{
			trickArray.push("360 Inward Heelflip");
		}
	}
	// End Intermediate //
	
	// Output
	if (trickArray.length == 0 | stanceArray.length == 0)
	{
		window.alert("Please ensure at least one item from each section is selected!")
	}
	else
	{
		// Get random stance
		var randStance = Math.floor((Math.random() * stanceArray.length));
		var currentStance = stanceArray[randStance];
		
		// Get random trick
		var randTrick = Math.floor((Math.random() * trickArray.length));
		var currentTrick = trickArray[randTrick];
				
		//Avoids the terms "Nollie Ollie" and "Fakie Ollie"
		if (currentTrick == "Ollie" && (currentStance == "Nollie" | currentStance == "Fakie"))
		{
			
			document.getElementById("ClickButton").value = currentStance;
		}
		//Output stance and trick
		else
		{
			document.getElementById("ClickButton").value = currentStance + " " + currentTrick;
		}
	}
	// End Output

}
