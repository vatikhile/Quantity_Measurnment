var clickScale = true;
var clickHot = true;
var clickBeaker = true;
var selectedUnitFrom = 'Meter';
var selectedUnitTo = 'Centimeters';
$(document).ready(function () {

    $("#selectItem").change(function () {
        selectedUnitFrom = $(this).children("option:selected").val();
        console.log("units", selectedUnitFrom);

    });
    $("#selectItemTo").change(function () {
        selectedUnitTo = $(this).children("option:selected").val();
        var inputData = $('#inputDigits').val();
        console.log("input", inputData);
        temperatureConverter(inputData)


    });

    if (clickScale == true && clickHot == true && clickBeaker == true) {
        $("#childDiv1").css("border", "1px solid #0EC098");
        $("#childDiv1").css("background-color", "#EDFDF9");
        $('#scaleImg').attr('src', '../ASSETS/scale_color.svg');
        $("#cardText1").css("color", "#0EC098")
    }

    $('#childDiv1').click(function () {
        clickScale = false
        clickHot = true;
        clickBeaker = true;
        hotDisable()
        beakerDisable()
        scaleEnable()
        $('.firstOption').text('Meter');
        $('.secondOption').text('Centimeters');
        $('.thirdOption').text('Kilometer');
        $('.fourthOption').text('foot');
        $('.fifthOption').text('inch');
        $('.firstOption1').text('Centimeters');
        $('.secondOption1').text('Meter');
        $('.thirdOption1').text('Kilometer');
        $('.fourthOption1').text('foot');
        $('.fifthOption1').text('inch');
        $('#outputCelcius').text('100');
        $('#inputDigits').val('1');

    });
    $('#childDiv2').click(function () {
        clickHot = false;
        clickBeaker = true;
        clickScale = true;
        scaleDisable()
        beakerDisable()
        hotEnable()
        $('.firstOption').text('Celcius');
        $('.secondOption').text('Fahrenheit');
        $('.thirdOption').text('Kelvin');
        $('.fourthOption').text('');
        $('.fifthOption').text('');
        $('.firstOption1').text('Fahrenheit');
        $('.secondOption1').text('Celcius');
        $('.thirdOption1').text('Kelvin');
        $('.fourthOption1').text('');
        $('.fifthOption1').text('');
        $('#outputCelcius').text('32');
        $('#inputDigits').val('0');

    });
    $('#childDiv3').click(function () {
        clickBeaker = false;
        clickScale = true;
        clickHot = true;
        hotDisable()
        scaleDisable()
        beakerEnable()
        $('.firstOption').text('Liters');
        $('.secondOption').text('Milliliters');
        $('.thirdOption').text('Gallons');
        $('.fourthOption').text('');
        $('.fifthOption').text('');
        $('.firstOption1').text('Milliliters');
        $('.secondOption1').text('Liters');
        $('.thirdOption1').text('Gallons');
        $('.fourthOption1').text('');
        $('.fifthOption1').text('');
        $('#outputCelcius').text('1000');
        $('#inputDigits').val('1');
    });
    $("#childDiv1").hover(function () {
        $("#childDiv1").css("border", "1px solid #0EC098");
        $("#childDiv1").css("background-color", "#EDFDF9");
        $('#scaleImg').attr('src', '../ASSETS/scale_color.svg');
        $("#cardText1").css("color", "#0EC098")
    }, function () {
        if (clickScale == false) {
            $("#childDiv1").css("border", "1px solid #0EC098");
            $("#childDiv1").css("background-color", "#EDFDF9");
            $('#scaleImg').attr('src', '../ASSETS/scale_color.svg');
            $("#cardText1").css("color", "#0EC098")
        }
        else {
            $("#childDiv1").css("border", "1px solid transparent");
            $("#childDiv1").css("background-color", "white");
            $('#scaleImg').attr('src', '../ASSETS/scale.svg');
            $("#cardText1").css("color", "gray")
        }
    });

    $("#childDiv2").hover(function () {

        $(this).css("border", "1px solid #FD5160");
        $(this).css("background-color", "#FFEEF0");
        $('#hotImg').attr('src', '../ASSETS/hot_color.svg');
        $("#cardText2").css("color", "#FD5160")

    }, function () {
        if (clickHot == true) {
            $(this).css("border", "1px solid transparent");
            $(this).css("background-color", "white");
            $('#hotImg').attr('src', '../ASSETS/hot.svg');
            $("#cardText2").css("color", "gray")
        }
    });

    $("#childDiv3").hover(function () {
        $(this).css("border", "1px solid #7224FF");
        $(this).css("background-color", "#E8DDFF");
        $('#beakerImg').attr('src', '../ASSETS/beaker_color.svg');
        $("#cardText3").css("color", "#7224FF")
    }, function () {
        if (clickBeaker == true) {
            $(this).css("border", "1px solid transparent");
            $(this).css("background-color", "white");
            $('#beakerImg').attr('src', '../ASSETS/beaker.svg');
            $("#cardText3").css("color", "gray")
        }
    });
})

function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    console.log("gggg", valNum);
    console.log("from to", selectedUnitFrom + selectedUnitTo);
    if (selectedUnitFrom == 'Meter' && selectedUnitTo == 'Kilometer') {
        Meter_to_Kilometers(valNum)
    }
    if (selectedUnitFrom == 'Meter' && selectedUnitTo == 'Centimeters') {
        Meter_to_Centimeters(valNum)
    }
    if (selectedUnitFrom == 'Meter' && selectedUnitTo == 'foot') {
        Meter_to_Feet(valNum)
    }
    if (selectedUnitFrom == 'Meter' && selectedUnitTo == 'inch') {
        Meter_to_Inch(valNum)
    }
    if (selectedUnitFrom == 'Meter' && selectedUnitTo == 'Meter') {
        $('.secondOption1').prop('disabled', true);
    }

    if (selectedUnitFrom == 'Centimeters' && selectedUnitTo == 'Kilometer') {
        Centimeters_to_Kilometers(valNum)
    }
    if (selectedUnitFrom == 'Centimeters' && selectedUnitTo == 'Centimeters') {
        Centimeters_to_Centimeters(valNum)
    }
    if (selectedUnitFrom == 'Centimeters' && selectedUnitTo == 'foot') {
        Centimeters_to_Feet(valNum)
    }
    if (selectedUnitFrom == 'Centimeters' && selectedUnitTo == 'inch') {
        Centimeters_to_Inch(valNum)
    }
    if (selectedUnitFrom == 'Celcius' && selectedUnitTo == 'Fahrenheit') {
        Celcius_to_Fahrenheit(valNum)
    }

}
/* Convert from Meters to Kilometers */
function Meter_to_Kilometers(meter) {
    // document.getElementById("outputCelcius").innerHTML =''
    document.getElementById("outputCelcius").innerHTML = meter / 1000
}
function Meter_to_Centimeters(meter) {
    document.getElementById("outputCelcius").innerHTML = meter * 100
}
/* Convert from Meters to Feet */
function Meter_to_Feet(meter) {
    document.getElementById("outputCelcius").innerHTML = meter * 3.2808
}
/* Convert from Meters to Inches */
function Meter_to_Inch(meter) {
    document.getElementById("outputCelcius").innerHTML = meter * 39.370
}




function Centimeters_to_Kilometers(meter) {
    console.log("bb");
    document.getElementById("outputCelcius").innerHTML = meter / 100000
}

function Centimeters_to_Feet(meter) {
    console.log("bc");
    document.getElementById("outputCelcius").innerHTML = meter * 0.032808
}
function Centimeters_to_Centimeters(meter) {
    console.log("bc");
    document.getElementById("outputCelcius").innerHTML = meter
}
function Centimeters_to_Inch(meter) {
    console.log("bc");
    document.getElementById("outputCelcius").innerHTML = meter * 0.39370
}
function Celcius_to_Fahrenheit(valNum) {
    document.getElementById("outputCelcius").innerHTML = (meter * 1.8) + 32
}

function scaleDisable() {
    $("#childDiv1").css("border", "1px solid transparent");
    $("#childDiv1").css("background-color", "white");
    $('#scaleImg').attr('src', '../ASSETS/scale.svg');
    $("#cardText1").css("color", "gray")

}
function scaleEnable() { } {
    $("#childDiv1").css("border", "1px solid #0EC098");
    $("#childDiv1").css("background-color", "#EDFDF9");
    $('#scaleImg').attr('src', '../ASSETS/scale_color.svg');
    $("#cardText1").css("color", "#0EC098")

}

function hotDisable() {
    $("#childDiv2").css("border", "1px solid transparent");
    $("#childDiv2").css("background-color", "white");
    $('#hotImg').attr('src', '../ASSETS/hot.svg');
    $("#cardText2").css("color", "gray")

}
function hotEnable() {
    $(this).css("border", "1px solid #FD5160");
    $(this).css("background-color", "#FFEEF0");
    $('#hotImg').attr('src', '../ASSETS/hot_color.svg');
    $("#cardText2").css("color", "#FD5160")

}

function beakerDisable() {
    $("#childDiv3").css("border", "1px solid transparent");
    $("#childDiv3").css("background-color", "white");
    $('#beakerImg').attr('src', '../ASSETS/beaker.svg');
    $("#cardText3").css("color", "gray")


}
function beakerEnable() {
    $(this).css("border", "1px solid #7224FF");
    $(this).css("background-color", "#E8DDFF");
    $('#beakerImg').attr('src', '../ASSETS/beaker_color.svg');
    $("#cardText3").css("color", "#7224FF")
}

