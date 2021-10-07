document.addEventListener('DOMContentLoaded', function() { 
    printWelcome()
})

window.addEventListener('resize', resizeCanvas, false)

function printWelcome() {
  var welcomemsg = new Typed('.welcomemsg',{
        strings : ["Welcome to Hacker Terminal  <br>This code is just for fun, this is not a real terminal hacker, 99% of everything is just UI. "],
        stringsElement: null, 
        typeSpeed: 70, 
        backSpeed: 60,
        smartBackspace: true,
        showCursor: true,
        cursorChar: '█',
        autoInsertCss: true,
        onComplete: (self) => {
            $('.typed-cursor').hide()
            printNext1()
            
        }
    });   
}

var printNext1 = function() {
        var typed = new Typed("#typed2", {
        strings: ["░█─░█ ─█▀▀█ ░█▀▀█ ░█─▄▀ <br>░█▀▀█ ░█▄▄█ ░█─── ░█▀▄─ <br>░█─░█ ░█─░█ ░█▄▄█ ░█─░█<br>"],
        stringsElement: null, 
        typeSpeed: 1, 
        showCursor: false,
        cursorChar: '█',
        autoInsertCss: true,
        onComplete: (self) => {
           $('.commandLine').toggleClass('hidden')
           commandLine()
        }
    })
}

var throwException = function(command) {
    return command + '&nbsp:invalid command, type list to see all command'
}

var printAvailableCommands = function(){
    $('.lineSent span').append('Available commands:<br>> list<br>> send virus<br>> connect<br>> engage<br>> randomize ip<br>> hack server<br>> ddos<br>> browser info<br>> screen info<br>> nuke<br>> clear<br>')
}

printCommand = function(command) {
    $('.lineSent span').append(command + '<br>')
}

var makeConnection = function() {
    $('.commandLine').toggleClass('hidden')
    
    var connection = new Typed('.lineSent span', {
         strings : [$('.lineSent span').text(),'Initializing...<br>  Done<br>Loading Interface...<br>Decrypting Data...<br>Securing Connection...<br>Connecting...<br>Initializing Server...<br>Authenticating...Obtaining Keypass...<br>Connection Successful.<br>Initializing...<br> Done<br><br><b>Server Diagnostics:</b><br>IP: <e>198.162.0.7:2222</e><br>Gateway: <e>225.225.225 <i>0 <i>Flags <i>up</i><br>Server_Address: <i>175.297.64.75</i><br>Username: <i>Anonymous</e><br>Password: <i>eT3%p@e</e>'],
        stringsElement: null, 
        backSpeed: 10,
        smartBackspace: true,
        typeSpeed: 50, 
        showCursor: true,
        cursorChar: '█',
        autoInsertCss: true,
        onComplete: (self) => {
            $('.typed-cursor').hide()
            $('.commandLine').toggleClass('hidden')
            $('input').focus()
        }
    })
}

   var hackserv = function() {
    $('.commandLine').toggleClass('hidden')
    
    var hack_server = new Typed('.lineSent span', {
         strings : [$('.lineSent span').text(),"Matching modules...","exploit/windows/smb/ms06_070_wkssvc | MS06-070 Microsoft Workstation Service NetpManageIPCConnect Overflow","Starting connection to (https://microsoft.com/databases)","Fetching information... 12%","Fetching information... 23%","Fetching information... 31%","Fetching information... 67%","Fetching information... 93%","Fetching information... 100%","Data successfully stored in /root/hacker/data",""],
        stringsElement: null, 
        backSpeed: 10,
        smartBackspace: true,
        typeSpeed: 50, 
        showCursor: true,
        cursorChar: '█',
        autoInsertCss: true,
        onComplete: (self) => {
            $('.typed-cursor').hide()
            $('.commandLine').toggleClass('hidden')
            $('input').focus()
        }
    })
}
   
var randomIP = function() {
  var ip1 = Math.floor(Math.random() * 230);
  var ip2 = Math.floor(Math.random() * 210);
  var ip3 = Math.floor(Math.random() * 210);
  var ip4 = Math.floor(Math.random() * 127);
  var ip = + ip1 + '.' + ip2 + '.' + ip3 + '.' + ip4;
  

    $('.commandLine').toggleClass('hidden')
    
    var randomize_ip = new Typed('.lineSent span', {
           strings : [$('.lineSent span').text(),'Randomizing IP... [=] 28%','Randomizing IP... [==] 48%','Randomizing IP... [===] 68%','Randomizing IP... [====] 87%','Randomizing IP... [=====] 100%<br>IP randomized'],
        stringsElement: null, 
        backSpeed: 10,
        smartBackspace: true,
        typeSpeed: 50, 
        showCursor: true,
        cursorChar: '█',
        autoInsertCss: true,
        onComplete: (self) => {
            $('.typed-cursor').hide()
            $('.commandLine').toggleClass('hidden')
            $('input').focus()
            prompt("Your new IP: ", ''+ip);
            
        }
    })
}
var about = function() {
    $('.commandLine').toggleClass('hidden')
    
    var about = new Typed('.lineSent span', {         strings : [$('.lineSent span').text(),'<b>About</b><br>Created by: <i>Anargya Anubhawa</i><br>Created on: <i>6 October 2021</i><br>Technology: <i>HTML, CSS, JS</i><br>lib: >Typed, jQuery</i>'],
        stringsElement: null, 
        backSpeed: 10,
        smartBackspace: true,
        typeSpeed: 50, 
        showCursor: true,
        cursorChar: '█',
        autoInsertCss: true,
        onComplete: (self) => {
            $('.typed-cursor').hide()
            $('.commandLine').toggleClass('hidden')
            $('input').focus()
        }
    })
}

var ddos = function() {
    $('.commandLine').toggleClass('hidden')
    
    var ddos = new Typed('.lineSent span', {
         strings : [$('.lineSent span').text(),'Initializing...<br>Loading Interface...<br>Securing Connection...<br>Initializing DDOS attack...<br>Obtaining server IP<br>D O N E<br><br>Server IP: 198.162.0.7:2222<br>Packet Size: 971628628 bytes<br>estimated time: 13 second<br><br>'],
        stringsElement: null, 
        backSpeed: 10,
        smartBackspace: true,
        typeSpeed: 50, 
        showCursor: true,
        cursorChar: '█',
        autoInsertCss: true,
        onComplete: (self) => {
            ddos2()
        }
    })
}

var ddos2 = function() {
    
    var ddos2 = new Typed('.lineSent span', {
         strings : [$('.lineSent span').text(),'Initializing...<br>Loading Interface...<br>Securing Connection...<br>Initializing DDOS attack...<br>Obtaining server IP<br>D O N E<br><br>Server IP: 198.162.0.7:2222<br>Packet Size: 971628628 bytes<br>estimated time: 13 second<br><br>attacking 198.162.0.7:2222 packet size: 971628628 bytes<br>attacking 198.162.0.7:2222 packet size: 971628628 bytes<br>attacking 198.162.0.7:2222 packet size: 971628628 bytes<br>attacking 198.162.0.7:2222 packet size: 971628628 bytes<br>attacking 198.162.0.7:2222 packet size: 971628628 bytes<br>attacking 198.162.0.7:2222 packet size: 971628628 bytes<br>attacking 198.162.0.7:2222 packet size: 971628628 bytes<br>attacking 198.162.0.7:2222 packet size: 971628628 bytes<br>attacking 198.162.0.7:2222 packet size: 971628628 bytes<br>attacking 198.162.0.7:2222 packet size: 971628628 bytes<br>attacking 198.162.0.7:2222 packet size: 971628628 bytes<br><br><b>S E R V E R__D O W N</b>'],
        stringsElement: null, 
        backSpeed: 10,
        smartBackspace: true,
        typeSpeed: 5, 
        showCursor: true,
        cursorChar: '█',
        autoInsertCss: true,
        onComplete: (self) => {
            $('.typed-cursor').hide()
            $('.commandLine').toggleClass('hidden')
            $('input').focus()
        }
    })
}

var virus = function() {
    $('.commandLine').toggleClass('hidden')
    
    var send_virus = new Typed('.lineSent span', {
         strings : [$('.lineSent span').text(),'Initializing...<br>  <e>Done<e><br>Loading Interface...<br>Decrypting Data...<br>Securing Connection...<br>Connecting...<br>Initializing Server...<br>Authenticating...<br>Obtaining Keypass...<br><i>Connection Successful.</i><br>Sending Virus...<br>Successfully send the virus'],
        stringsElement: null, 
        backSpeed: 10,
        smartBackspace: true,
        typeSpeed: 60, 
        showCursor: true,
        cursorChar: '█',
        autoInsertCss: true,
        onComplete: (self) => {
            $('.typed-cursor').hide()
            $('.commandLine').toggleClass('hidden')
            $('input').focus()
        }
    })
}
var nuke = function() {
    $('.commandLine').toggleClass('hidden')
    
    var nuke = new Typed('.lineSent span', {
         strings : [$('.lineSent span').text(),'───────█████████████████████<br>────████▀─────────────────▀████<br>──███▀───────────────────────▀███<br>─██▀───────────────────────────▀██<br>█▀───────────────────────────────▀█<br>█─────────────────────────────────█<br>█─────────────────────────────────█<br>█─────────────────────────────────█<br>█───█████─────────────────█████───█<br>█──██▓▓▓███─────────────███▓▓▓██──█<br>█──██▓▓▓▓▓██───────────██▓▓▓▓▓██──█<br>█──██▓▓▓▓▓▓██─────────██▓▓▓▓▓▓██──█<br>█▄──████▓▓▓▓██───────██▓▓▓▓████──▄█<br>▀█▄───▀███▓▓▓██─────██▓▓▓███▀───▄█▀<br>──█▄────▀█████▀─────▀█████▀────▄█<br>─▄██───────────▄█─█▄───────────██▄<br>─███───────────██─██───────────███<br>─███───────────────────────────███<br>──▀██──██▀██──█──█──█──██▀██──██▀<br>───▀████▀─██──█──█──█──██─▀████▀<br>────▀██▀──██──█──█──█──██──▀██▀<br>──────────██──█──█──█──██<br>──────────██──█──█──█──██<br>──────────██──█──█──█──██<br>──────────██──█──█──█──██<br>──────────██──█──█──█──██<br>──────────██──█──█──█──██<br>──────────██──█──█──█──██<br>──────────██──█──█──█──██<br>──────────██──█──█──█──██<br>──────────██──█──█──█──██<br>──────────██──█──█──█──██<br>──────────██──█──█──█──██<br>───────────█▄▄█▄▄█▄▄█▄▄█<br>N U K E D'],
        stringsElement: null, 
        backSpeed: -1000,
        smartBackspace: true,
        typeSpeed: -15, 
        showCursor: true,
        cursorChar: '█',
        autoInsertCss: true,
        onComplete: (self) => {
            $('.typed-cursor').hide()
            $('input').focus()
        }
    })
}

var browser = function() {
    $('.commandLine').toggleClass('hidden')
    
    var info1=('<b>browser name:</b> '+navigator.appName)
    var info2=('<br><br><b>browser version:</b> '+navigator.appVersion)
    var info3=('<br><br><b>cookie enabled:</b> '+navigator.cookieEnabled)
    var info4=('<br><br>browser language:</b> '+navigator.language)
    var info5=('<br><br><b>browser is online:</b> '+navigator.onLine)
    var info6=('<br><br><b>platform:</b> '+navigator.platform)
    var info7=('<br><br><b>browser engine:</b> '+navigator.product)
    var info8=('<br><br><b>user-agent:</b> ')+navigator.userAgent
    
    var browser_info = new Typed('.lineSent span', {
         strings : [$('.lineSent span').text(),'Getting browser info...<br>success getting browser info<br><br>'+info1+info2+info3+info4+info5+info6+info7+info8],
        stringsElement: null, 
        backSpeed: 10,
        smartBackspace: true,
        typeSpeed: 50, 
        showCursor: true,
        cursorChar: '█',
        autoInsertCss: true,
        onComplete: (self) => {
            $('.typed-cursor').hide()
            $('.commandLine').toggleClass('hidden')
            $('input').focus()
        }
    })
}

    var i1=(''+window.screen.width)
    var i2=(''+window.screen.height)
    var i3=(''+window.screen.availWidth)
    var i4=(''+window.screen.availHeight)
    var i5=(''+window.screen.colorDepth)
    var i6=(''+window.screen.pixelDepth)
    

var screen = function() {
    $('.commandLine').toggleClass('hidden')
    
    var info1=('<b>screen width:</b> '+i1)
    var info2=('<br><br><b>screen height:</b> '+i2)
    var info3=('<br><br><b>available width:</b> '+i3)
    var info4=('<br><br><b>available height:</b> '+i4)
    var info5=('<br><br><b>color depth:</b> '+i5)
    var info6=('<br><br><b>resolution:</b> '+i6)
    
    var screen_info = new Typed('.lineSent span', {
         strings : [$('.lineSent span').text(),'Getting screem info...<br>success getting screen info<br><br>'+info1+info2+info3+info4+info5+info6],
        stringsElement: null, 
        backSpeed: 10,
        smartBackspace: true,
        typeSpeed: 50, 
        showCursor: true,
        cursorChar: '█',
        autoInsertCss: true,
        onComplete: (self) => {
            $('.typed-cursor').hide()
            $('.commandLine').toggleClass('hidden')
            $('input').focus()
        }
    })
}

var manageCommands = function(command) {
    var lineString = 'root@hacker-workstation# '
    var exit
    
    switch(command.toLowerCase()) {
        case 'list': printCommand(lineString + command)
            printAvailableCommands()
            break
        case 'connect':
            printCommand(lineString + command)
            makeConnection()
            break
        case 'clear': 
            $('.lineSent span').text("")
            break
        case 'engage':
            hacking()
            break
        case 'randomize ip':
            randomIP()
            break
        case 'about':
            about()
            break
        case 'browser info':
            browser()
            break
        case 'screen info':
            screen()
            break
        case 'send virus':
            virus()
            break
        case 'hack server':
            hackserv()
            break
        case 'ddos':
            ddos()
            break
        case 'nuke':
            nuke()
        case 'nuked':
            $('.lineSent span').nuked("Anonymous")
            break
        default: printCommand(lineString + throwException(command))
    }
} 

var commandLine = function() {
    var cursor

    $('input').focus()
  
    cursor = window.setInterval(function() {
        if ($('#cursor').css('visibility') === 'visible') {
            $('#cursor').css({ visibility: 'hidden' })
        } else {
            $('#cursor').css({ visibility: 'visible' })  
        }  
    }, 500)
  

    $('input').keyup(function(e) {
        if (e.keyCode == 13) {
            manageCommands($('#cmd span').text())
            $(this).val("");
        }
        $('#cmd span').text($(this).val())
    })
    $('input').keyup(function(e) {
        if (e.keyCode == 13) {
            manageCommands($('#cmd span').nuked())
            $(this).val("anonymous");
        }
        $('#cmd span').nuked($(this).val())
    })
}


function hacking() {
    var c = document.getElementById('engage')
    
    c.height = window.innerHeight
    c.width = window.innerWidth
    
    var fontSize = 12
    var columns = c.width / fontSize
    var letters=[]
    
    for (var i = 0; i < columns; i++) {
        letters[i] = 1
    }
    
    context = c.getContext('2d')

    function drawMatrix() {
        context.fillStyle = 'rgba(0, 0, 0, 0.05)'
        context.fillRect(0, 0, c.width, c.height)
        context.fillStyle = getRandomColor()
        context.font = fontSize + 'px monospace'

        for (var i = 0; i < letters.length; i++) {
            var text = (Math.floor(Math.random() * 2)).toString()
            
            context.fillText(text, i * fontSize, letters[i] * fontSize)

            if (letters[i] * fontSize > c.height && Math.random() > 0.975) {
                letters[i] = 0
            }
            
            letters[i]++
        }

    }
    setInterval(drawMatrix, 120)
}

function resizeCanvas() {
    var c = document.getElementById("engage")
    
    c.width = window.innerWidth
    c.height = window.innerHeight
}

function getRandomColor() {
  var letters = '0123456789ABCDEF'
  var color = '#'
  
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  
  return color;
}


$(window).click(function() {
      $('input').focus()
})
