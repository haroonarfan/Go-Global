from cProfile import label
from bs4 import BeautifulSoup
from tkinter import *
import pathlib
import glob
import os
from PIL import ImageTk, Image  

pathOfFile = pathlib.Path(__file__).parent.resolve()
os.chdir(pathOfFile)
my_files = glob.glob('*.html')
# print(my_files)

# window
tkWindow = Tk()
tkWindow.geometry('1143x546')
tkWindow.title('Nav Bar Linker')


# Frame
MainFrame = Frame(tkWindow)
MainFrame.pack(fill='both', expand=1)

# Variables
navPart1 = StringVar()
navPart2 = StringVar()
navPart3 = StringVar()
navPart4 = StringVar()
navPart5 = StringVar()

navPart1link = StringVar(MainFrame)
navPart1link.set('index.html')
navPart2link = StringVar(MainFrame)
navPart2link.set(my_files[0])
navPart3link = StringVar(MainFrame)
navPart3link.set(my_files[0])
navPart4link = StringVar(MainFrame)
navPart4link.set(my_files[0])
navPart5link = StringVar(MainFrame)
navPart5link.set(my_files[0])

# values
navPart1_value = ""
navPart2_value = ""
navPart3_value = ""
navPart4_value = ""
navPart5_value = ""


def settler(cssClass):
    pass




navHome = Entry(MainFrame, textvariable=navPart1, background='black', borderwidth=0,
                fg='white', width=20, insertbackground='white')
navHome.place(x=13, y=52)
navHome.delete(0, END)
navHome.insert(0, "Home")
navHomeLabel = Label(
    MainFrame, text="Link 1 (Home<index.html>)", foreground="black")
navHomeLabel.pack()
navHomeLabel.place(x=13, y=30)
w = OptionMenu(MainFrame, navPart1link, *my_files)
w.pack()
w.place(x=13, y=80)



nav_2 = Entry(MainFrame, textvariable=navPart2, background='black', borderwidth=0,
                fg='white', width=20, insertbackground='white')
nav_2.place(x=173, y=52)
nav_2.delete(0, END)
nav_2.insert(0, "Link2")
nav2Label = Label(
    MainFrame, text="Link 2", foreground="black")
nav2Label.pack()
nav2Label.place(x=173, y=30)
w1 = OptionMenu(MainFrame, navPart2link, *my_files)
w1.pack()
w1.place(x=173, y=80)



nav_3 = Entry(MainFrame, textvariable=navPart3, background='black', borderwidth=0,
                fg='white', width=20, insertbackground='white')
nav_3.place(x=333, y=52)
nav_3.delete(0, END)
nav_3.insert(0, "Link3")
nav3Label = Label(
    MainFrame, text="Link 3", foreground="black")
nav3Label.pack()
nav3Label.place(x=333, y=30)
w2 = OptionMenu(MainFrame, navPart3link, *my_files)
w2.pack()
w2.place(x=333, y=80)

nav_4 = Entry(MainFrame, textvariable=navPart4, background='black', borderwidth=0,
                fg='white', width=20, insertbackground='white')
nav_4.place(x=493, y=52)
nav_4.delete(0, END)
nav_4.insert(0, "Link4")
nav4Label = Label(
    MainFrame, text="Link 4", foreground="black")
nav4Label.pack()
nav4Label.place(x=493, y=30)
w3 = OptionMenu(MainFrame, navPart4link, *my_files)
w3.pack()
w3.place(x=493, y=80)

nav_5 = Entry(MainFrame, textvariable=navPart5, background='black', borderwidth=0,
                fg='white', width=20, insertbackground='white')
nav_5.place(x=693, y=52)
nav_5.delete(0, END)
nav_5.insert(0, "Link5")
nav5Label = Label(
    MainFrame, text="Link 5", foreground="black")
nav5Label.pack()
nav5Label.place(x=693, y=30)
w4 = OptionMenu(MainFrame, navPart5link, *my_files)
w4.pack()
w4.place(x=693, y=80)


image1 = Image.open(f"{pathOfFile}\header.jpg")
test = ImageTk.PhotoImage(image1)

label1 = Label(image=test)
label1.image = test
label1.place(x=45, y=352)



with open("header.html") as inf:
    txt = inf.read()
    soup = BeautifulSoup(txt, "html.parser")

# ab = soup.find("a",class_="nav-part1")
# ab.string = "Not HOme"
# ab['href'] = "inde.h"

####Start OF Experimenting######

# home_name = input("Enter name of Home Link: ")
# home_link = input("Enter link for home: ")

# soup.find("a",class_="nav-part1").string = home_name
# soup.find("a",class_="nav-part1")['href'] = home_link


##############End#################

# with open("origin copy 2.html", "w") as outf:
#     outf.write(str(soup.prettify(formatter="html")))


# DOn't Remove

tkWindow.resizable(False, False)
tkWindow.mainloop()
