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
To make sure `Xbox_Hotkeys.ahk` runs everytime windows starts up, we'll **Place `Xbox_Hotkeys.ahk` in the startup folder**. <span style="font-size:1.5em;">Hold Windows key and press 'r'</span>, this should open the run command. Inside of the run command, type `shell:startup`. It should look this

![startup shell image](https://i.imgur.com/62WheQe.png)

Press enter and it will open an explorer page where applications inside will run when windows startup. **Drag or copy `Xbox_Hotkeys.ahk` to this explorer page** and the file will run on startup.

---
<!-- , we'll run through some of the commands and functions now. -->