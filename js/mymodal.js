/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

MYMODAL=(function(){
        function MYMODAL(){

this.Dialog = function ()
{
    this.content;
    this.title;
    this.template;
    this.id=Date.now();
    this.delay=500;
    this.valuedFields;
    this.retVal={};
    this.onOk;
    this.OK_ID;
    this.cancel_ID;
    this.showInfo=function () {
        setBackgroundsize();
        self=this;
        $('#infobackground_'+this.id).show(this.delay, function() {

                $('#info_'+self.id).show(self.delay);     
        });
    };
    
    this.init=function()
    {
        this.template="<div class='infobackground' id='infobackground_"+this.id+"'>\
                <div class='info' id='info_"+this.id+"'> \
                        <div class='info-content' id='info-content_"+this.id+"'><div id='close_"+this.id+"' class='close'>X</div><div class='infobody'>\
                            <h2>"+this.title+"</h2> \
    "+this.content+"\
                        </div></div>\
                    </div>\
            \
            </div>";
        
        
        
        $('body').append(this.template);
        self=this;
        $("#close_"+this.id).on('click',  this.closemodal.bind(this));
        $("#"+this.cancel_ID).on('click',  this.closemodal.bind(this));
        $("#"+this.OK_ID).on('click',  this.modalOK.bind(this));
        $('#info_'+this.id).draggable();
        $('#info-content_'+this.id).resizable();
    
    };
    this.closemodal = function () {
        $("#info_"+this.id).hide();
        $("#infobackground_"+this.id).hide();
    };
    
    this.modalOK = function () {
        for(var i=0;i<this.valuedFields.length;i++)
        {
            this.retVal[this.valuedFields[i]]=$('#'+this.valuedFields[i]).val();
            $('#'+this.valuedFields[i]).val('');
        }
        this.onOk();
        $("#info_"+this.id).hide();
        $("#infobackground_"+this.id).hide();
    };
};

};
return new MYMODAL();
})();



function GetWindowSize() {
    var result = new Array(2);
    var myWidth = 0, myHeight = 0;
    if (typeof (window.innerWidth) == 'number') {
        //Non-IE
        myWidth = window.innerWidth;
        myHeight = window.innerHeight;
    } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
        //IE 6+ in 'standards compliant mode'
        myWidth = document.documentElement.clientWidth;
        myHeight = document.documentElement.clientHeight;
    }
    result[0] = myWidth;
    result[1] = myHeight;
    return result;    
}

function setBackgroundsize() {
    var windowsize = GetWindowSize();
    
    $(".infobackground").css({
        "width": windowsize[0],
        "height": windowsize[1],
        "top": "0",
        "left": "0",
        "min-height": windowsize[1]
    });
    
    $(".info").css({
        "left": windowsize[0] / 2 - 500 / 2,
        "top": windowsize[1] / 2 - 600 / 2
    });
}

$(window).bind('resize', function() {
  setBackgroundsize();
});
