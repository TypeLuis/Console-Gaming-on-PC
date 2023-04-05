# Console-Gaming-on-PC

# Prerequisites
Before anything, there are some applications that needs to be downloaded. Also, we're going to need to buy a couple of accessories as well in order to make this work.

| Link | Description |
| ----------- | ----------- |
| [Steam](https://store.steampowered.com) | Steam is a store for games and software that also holds your games in a library. Even adding non-steam games. What's good about Steam is you can also add controller support to games that usually doesn't have. Make sure to create an account on steam. |
| [Controller Companion](https://store.steampowered.com/app/367670/Controller_Companion/) | This application cost around $3 and what it does is makes your controller acts as a mouse/keyboard using the joysticks and buttons as a mouse and when you press L3 (Left joystick) a simulated keyboard appears in order to type anything necessary. When not in fullsceen (Or when you press Start & Select button together) the contoller will be in companion mode. When you are fullscreen mode / in a game, companion mode will stop.   |
| [AutoHotKey](https://www.autohotkey.com) | AutoHotkey is a free, open-source scripting language for Windows that allows users to easily create small to complex scripts for all kinds of tasks. This will be used to create hotkey scripts for your xbox contoller to close applications with controller or to use certain keys within a game if the game is open. AutoHotkey is an amazing language and recommend it to anybody that wants to learn more. |
| [LaunchBox](https://www.launchbox-app.com/download) [BigBox](https://www.launchbox-app.com/premium) | Launchbox is a frontend library for all of your software that helps customize, organize and add as much information to any game/software. Launchbox allows imports from other libraries such as Steam and microsoft to name a few. Launchbox has a premium (BigBox) feature that costs $75 which is recommended to get to simulate a console expierence with your games/software. BigBox allows custom themes to your layout and videos with your game collection showing as a arcade cabinet. You can use your controller to navigate through your game collection and much more. **While it's recommended to buy** if $75 is a steep price it's available at [FileCR](https://filecr.com/windows/launchbox-with-big-box/?id=624243902400), Though it's not recommended since this is not official.|
| [Xbox Controller](https://www.amazon.com/Xbox-Core-Wireless-Controller-Robot-one/dp/B08DF26MXW/) | Controller for the PC |
| [Xbox Controller Adapter](https://www.amazon.com/Xbox-Core-Wireless-Controller-Robot-one/dp/B08DF26MXW/) | Adapter that allows user to use controller through bluetooth on PC seamlessly. |
| [12-25 ft HDMI](https://www.amazon.com/dp/B096ZJBSFS) | HDMI 2.1 to connect to your TV |

---
---

#  Setting up AutoHotKey

In the AutoHotKey folder there are two files   
1. `XInput.ahk` is the code file that allows xbox commands through AutoHotKey.  
2. `Xbox_Hotkeys.ahk` is the code file where xbox commands are found that are hot keys

Before anything, **in line 24 of Xbox_Hotkeys.ahk, we need to import the file path to XInput.ahk**.

Go to where Xinput.ahk is on windows explorer and <span style="font-size:1.5em;">Hold Shift and right click `XInput.ahk`</span>. You should see an option called `copy as path` like the image below, click option to copy the path.

![copy as path image](https://i.imgur.com/IDlVQpe.png)

in line **24** of `Xbox_Hotkeys.ahk`, replace `PATH/TO/XInput.ahk` with the copied path.

---
To make sure `Xbox_Hotkeys.ahk` runs everytime windows starts up, we'll **Place `Xbox_Hotkeys.ahk` in the startup folder**. <span style="font-size:1.5em;">Hold `Windows key` and press `r`</span>, this should open the run command. Inside of the run command, type `shell:startup`. It should look this

![startup shell image](https://i.imgur.com/62WheQe.png)

Press enter and it will open an explorer page where applications inside will run when windows startup. **Drag or copy `Xbox_Hotkeys.ahk` to this explorer page** and the file will run on startup.

---

## Xbox_Hotkeys.ahk commands

We'll go through some of the commands and functions now to get a better understanding.

```
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
```

Each button that's pressed represent a number, here we stored the number in a variable with the represented button.


```
Loop {
    Loop, 4 {
		if State := XInput_GetState(0) {
            LT := (State.bLeftTrigger > 10) ? State.bLeftTrigger : 0
			RT := (State.brightTrigger > 10) ? State.brightTrigger : 0
			btn := State.wButtons ; returns buttons, shoulders and guide state

            WHERE CODE IS PLACED


            CODE EXAMPLE

            if(btn = Floor(intparse(LB) + intparse(RB) + intparse(BACK)) ) { 
                Msgbox, HI
            }

            if(btn = HOME ) { 
                Msgbox, bye
            }
        }
    }
    Sleep, 100
}
```

This code **loops continuously** to allow the xbox commands to run whenever pressed. The btn variable returns the **sum** of the buttons press. If `UP` and `DOWN` were pressed, btn will be 3 for an example. We then check if btn is equal to any buttons we want to press and run code inside if that condition is true. In `Floor(intparse(LB) + intparse(RB) + intparse(BACK))`, `Floor()` is a **builtin function** that rounds the numbers and `intparse()` is a function that is written in `Xbox_Hotkeys.ahk` that **converts the datatype of string to an integer** to allow the btns to add.

<br>

--- 
Now to show some prebuilt functions and commands

1. <span style="font-size:1.5em;"> Switch Display</span>
```
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
```
### YOU DO NOT NEED TO UNDERSTAND WHAT'S HAPPENING IN THIS LINE OF CODE IF YOU DON'T WANT TO, BELOW IS HOW TO USE IT
This function changes the display from computer to TV with audio and vice versa. This function takes 4 parameters `Screen_Display, Audio_Device, btn_Num, btn` that **when called in the loop, needs to be placed in order**.  An example of this function being called is in *line 98* of `Xbox_Hotkeys.ahk`, `Switch_Display("external", 10, Floor(intparse(Lb) + intparse(L3) + intparse(START)), btn)` This switches to the TV. To connect with your audio number, follow [This link to help](https://theitbros.com/hotkey-to-switch-audio-devices/). My audio number is 10 but, yours might be different. `"external"` goes to TV display and `"internal"` goes to primary monitor.

<br>

2. <span style="font-size:1.5em;"> Close Active Process</span>
```
CloseActiveProcess()
{
    WinGetActiveTitle, ActiveWindow
    WinGet, ActiveWinPID, PID, %ActiveWindow%
    Process, Close, %ActiveWinPID%
    sleep 1000
}
```
This function closes the current active windows. This function command is used in line 59. `if (btn = Floor(intparse(LB) + intparse(RB) + intparse(BACK)) ) {CloseActiveProcess()}`, here the function is called inside the if statement. **YOU CAN CHANGE BUTTON NUMBERS TO HOW YOU SEEM FIT `intparse(button)`**

<br>

3. <span style="font-size:1.5em;"> Check if appliaction is running</span>
```
Process, Exist, APPLICATION.exe
        
    If ErrorLevel != 0 
        {
            Enter Code here (IF APPLICATION IS RUNNING)
        }
    else{
        Enter Code here (IF APPLICATION IS NOT RUNNING)
    }
```

This commands check if an application is running or not and enter certain code for whichever game (Remove `!` at errorlevel to check if app is not running). For Example in *line 194* If you want to play overwatch without the launcher, you need to login with your email and password, the function in *line 194* automatically enters username and password in game. **You need to change user and password in line 195 & 196**.

Heres how to find overwatch without launcher

1. Go to file explorer
2. Find Overwatch
3. Go to \_retail_
4. You will find Overwatch there. Open it. Game will ask to log to your account  

To find certain application's name through task manager

1. holding `Ctrl and Shift` and pressing `esc`
2. clicking **more details** if not already
3. clicking arrow to show application
4. right clicking to find **Open file location**

Example to find application  
![task manager app example](https://i.imgur.com/GLEAQke.png) ![Application name](https://i.imgur.com/TuXY3MQ.png)
