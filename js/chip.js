// INITIALIZATION OF CHIPS COLLECTION
var vChipsList =  [{
    tag: 'HeyMe',
}, {
    tag: 'Iam',
}, {
    tag: 'anInitialTag',
}];

// INITIALIZATION OF AUTOCOMPLETE LIST
var vTagList =  {
    alpha: null,
    Beta: null,
    avion: null,
    maman: null,
    paPa: null,
    aVec: null,
    instinct: null,
    Surf: null,
    blurp: null,
    doublon: null
};

function fDisplayChips() {
    // FILLS THE CHIPS ZONE FROM THE LIST
    $('#lg-Chips').material_chip({
        data: vChipsList
    });
}


// ADDING A NEW CHIP
function fChipAdd(lChipName){
    lChipName = lChipName.toLowerCase();
    // test1 : minimum word size
    if (!(lChipName.length > 2)){
        return 0;
    }
    // test2 :  no duplicates
    for(i=0;i<vChipsList.length;i++) {
        if(lChipName == vChipsList[i].tag){
            return 0;
        }
    }
    // tests Okay => add the chip and refresh the view
    vChipsList.push({"tag":lChipName});
    fDisplayChips();
    return 1;
};

$(function() {
// delete chip command
    $('#lg-Chips').on('chip.delete', function(e, chip){
        vChipsList = $("#lg-Chips").material_chip('data');
    });


    $("#lg-Chips").focusin(function () {
        $("#lg-input").focus();
    });


    fDisplayChips();


// NEW CHIP COMMAND
    $("#cmd-ChipsAjout").click(function () {
        fChipAdd($("#lg-input").val()) ;
        $("#lg-input").val("");
    });

    $("#lg-input").autocomplete({
        data: vTagList
    });

});


