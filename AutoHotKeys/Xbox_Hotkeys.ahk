#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

;Modifier Keys !=Alt, ^=Control, #=Windows, +=Shift

/*

ARTICLES THAT HELPED

{
    "Helped Understand to add value to get multiple keys working as a hotkey" : "https://www.reddit.com/r/AutoHotkey/comments/nny9dp/xinput_help_me_to_recognize_1_holding_on_a_button/",

    "Helped test to see if AHK works with Xbox controller" : "https://www.autohotkey.com/boards/viewtopic.php?f=6&t=29659",

    "Helped understand that each button has a bit number" : "https://www.autohotkey.com/boards/viewtopic.php?t=3389"

    "Helped learn how to include a script" : "https://www.autohotkey.com/docs/v1/lib/_Include.htm"
}

*/

#Include, PATH/TO/XInput.ahk


; To use multiple buttons as a hotkey, add the numbers that correlates with the buttons
; numbers buttons are corralated with though State.wButtons
UP := 1
DOWN := 2
LEFT := 4
RIGHT := 8
START := 16
BACK := 32
L3 := 64
R3 := 128
LB := 256
RB := 512
HOME := 1024
A := 4096
B := 8192
X := 16384
Y := 32768


XInput_Init()
CoordMode, ToolTip, Screen


; Used in controller
Loop {
    Loop, 4 {
		if State := XInput_GetState(0) {
            LT := (State.bLeftTrigger > 10) ? State.bLeftTrigger : 0
			RT := (State.brightTrigger > 10) ? State.brightTrigger : 0
			btn := State.wButtons ; returns buttons, shoulders and guide state

          
            if (btn = Floor(intparse(LB) + intparse(RB) + intparse(BACK)) ) { ; adds LB + RB + BACK buttons to create an auto close hotkey 

                CloseActiveProcess()

            }

            if (btn = HOME){
                Process, Exist, BigBox.exe

                If ErrorLevel = 0 ;Checks if there's an error when checking for the app
                    {
                        Process, Exist, rpcs3.exe
                        
                        if !ErrorLevel ; another way for checking if app is not running
                        { 

                            ; Prevents from showing launchbox if it's open instead of bigbox
                            Process, Exist, LaunchBox.exe

                            if !ErrorLevel
                                run G:\Games\LaunchBox\BigBox.exe

                            else {
                                Process, Close, LaunchBox.exe
                                run G:\Games\LaunchBox\BigBox.exe
                            }
                        }

                    }
            }

            GTA_HotKeys(Floor(intparse(LB) + intparse(UP)), "F3", btn)
            ; GTA_HotKeys(Floor(intparse(RB) + intparse(DOWN)), "F8", btn) ; RB + LEFT opens MEYOO
            GTA_HotKeys(Floor(intparse(LB) + intparse(LEFT)), "L", btn)

            OverwatchLogin(btn, Floor(intparse(BACK) + intparse(RB)))


            
            Switch_Display("external", 10, Floor(intparse(Lb) + intparse(L3) + intparse(START)), btn) ;TV
            Switch_Display("internal", 3, Floor(intparse(Lb) + intparse(R3) + intparse(START)), btn) ;Monitor


            FlashFullScreen(btn, Floor(intparse(BACK) + intparse(LB)) , "flashplayer_32_sa.exe", "alt", "enter") ; Flash Games

            FlashFullScreen(btn, Floor(intparse(BACK) + intparse(LB)) , "SPR.exe", "alt", "f11") ; Shockwave games
        }
    }
    Sleep, 100
}




; Functions used 


Pressed_Button(value) {
    Global aInput
	for name, bit in aInput
    {
        if (bit & value)
			s .= (s ? "`n" : "") name
    }
    return s
}
return

; HotKeys for GTAV to open mod menus
GTA_HotKeys(btn_Num, Key, btn){
    if (btn = btn_Num){
        Process, Exist, GTAVLauncher.exe
        
        If ErrorLevel = 0 ;Checks if there's an error when checking for the app
            {
                ;HOW TO USE HOTKEYS IN GAME  https://www.autohotkey.com/board/topic/111737-how-to-make-ahk-work-in-most-games-the-basics/
                Send, {%Key% down}
                Sleep 250
                Send, {%Key% up}
            }

    }
    return
}
return

;Switches between displays and audio
Switch_Display(Screen_Display, Audio_Device, btn_Num, btn) {

    if (btn = btn_Num){

        ; Changes between display one and display two
        ; https://superuser.com/questions/1162680/is-there-a-windows-10-hotkey-or-shortcut-for-switching-to-a-specific-display
        Run, C:\Windows\System32\DisplaySwitch.exe /%Screen_Display%


        ; https://theitbros.com/hotkey-to-switch-audio-devices/ 
        ; Switches audio device
        Run, mmsys.cpl
        WinWait,Sound
        ControlSend,SysListView321,{Down %Audio_Device%}
        ControlClick,&amp;amp;Set Default
        ControlClick,OK
        return
        return
    }
}


; parses from string to integer https://www.autohotkey.com/board/topic/11839-convert-a-string-to-a-integer-solved/
intparse(str) {

	str = %str% ; removes formatting

	Loop, Parse, str ; parse through each character

		If A_LoopField in 0,1,2,3,4,5,6,7,8,9,.,+,-

			int = %int%%A_LoopField% ; build integer

	Return, int + 0.0 ; returns real number

}


; closes active process https://www.autohotkey.com/boards/viewtopic.php?t=63779
CloseActiveProcess()
{
    WinGetActiveTitle, ActiveWindow
    WinGet, ActiveWinPID, PID, %ActiveWindow%
    Process, Close, %ActiveWinPID%
    sleep 1000
}


OverwatchLogin(btn, btn_Num) {
    uid = "Username"
    pw = "Password"
    if (btn = btn_Num){
        Process, Exist, Overwatch.exe
        
        If ErrorLevel != 0 
            {
                Send, %uid%{TAB}
                sleep 100
                Send, %pw%{ENTER}
            }

    }
}

FlashFullScreen(btn, btn_num, application, key1, key2){
    if (btn = btn_num){
        ; Msgbox, %btn_Num%
        Process, Exist, %application%

        if ErrorLevel != 0
            {
                Send, {%key1% down}
                sleep 100
                Send, {%key2%}
                Send, {%key1% up}
                ; Send, {%Key2%}
                ; Send, {%key1%}
            }
    }

}