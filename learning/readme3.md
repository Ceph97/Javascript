## TABLE OF CONTENTS
- [USABLE EXTENTIONS](#introduction)
    - [INSTALLING NODEJS](#nodejs)



## USABLE TOOLS AND EXTENTIONS <a name=introduction></a>
- Pretier extension
- ToDo highlighter extension
    - TODO:
    - COMMENT:
    - BUG:

- Installing NodeJS or live server extension

    - live server extension is a good alternative to nodejs if you don't want to install nodejs to test your code withou having to reload your browser.



- [Installing NodeJS](#nodejs)
    - NodeJS is a way of running JS outside your browser
    ```bash
    # To check if nodejs is installed
    node -v

    # To check if npm is installed
    # npm is a package manager for nodejs

    npm -v
    ```

    - To install live serve using npm
    - the ```-g``` flag means install globally so that you can use it anywhere in your system
    - Add sudo if you are using linux/mac
    ```bash
    npm install -g live-server
    ```
    - To run live server
    ```bash
    #Make sure you are in the directory you want to run 
    live-server
    ```
    - This will open a new tab in your browser with the live server running, and it will automatically reload when you make changes to your code. It uses the ```index.html``` file as the entry point.

    - To stop the live server, press ```ctrl + c``` in the terminal you are running the live server in.

    - To run live server in a different port
    ```bash
    live-server --port=3001
    ```


## ERROR HANDLING <a name=error></a>
- To check for errors in your code, open the console in your browser and check for errors.
- You can also use the ```debugger``` keyword to debug your code. This will pause the code at the point where you put the debugger keyword and you can check the values of variables at that point.

- Some useful debugging tools are:
    - ```console.log()```
    - ```debugger```
        - This will pause the code at the point where you put the debugger keyword and you can check the values of variables at that point.
        - You can also use the ```debugger``` keyword to debug your code. This will pause the code at the point where you put the debugger keyword and you can check the values of variables at that point.
        - for example:
            ```javascript
            const x = 1;
            const y = 2;
            debugger;
            const z = x + y;
            console.log(z);
            ```
    - ```console.dir()``` - This will display the properties of an object in the console
    - ```typeof```
    - ```console.table()``` - This will display the values of an array/object in a table format
    - ```console.error()``` - This will display an error message in the console
    - ```console.warn()``` - This will display a warning message in the console