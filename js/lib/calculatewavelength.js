// Room re    sonance node calculator

define(["jquery"], function($) {

function sort_unique(arr) {
    arr = arr.sort(function (a, b) { return a - b; });
    var ret = [arr[0]];
    for (var i = 1; i < arr.length; i++) { // start loop at 1 as element 0 can never be a duplicate
        if (arr[i-1] !== arr[i]) {
            ret.push(arr[i]);
        }
    }
    return ret;
}
	// Calculates in meters
	var compute = function (length,width,height) {
		ret = {};
		with (Math) {
			var L = eval(length);
			var W = eval(width);
			var H = eval(height);
			var m1=1;
			var m2=2;
			var m3=3;
			var m4=4;
			var m5=5;
			var m6=6;
			var m7=7;
			var m8=8;
			var m9=9;
			var ax1=(343/2)*sqrt((m1/L)*(m1/L)); 
			var ax2=(343/2)*sqrt((m1/W)*(m1/W));
			var ax3=(343/2)*sqrt((m1/H)*(m1/H));
			var ax4=(343/2)*sqrt((m2/L)*(m2/L));
			var ax5=(343/2)*sqrt((m2/W)*(m2/W));
			var ax6=(343/2)*sqrt((m2/H)*(m2/H));
			var ax7=(343/2)*sqrt((m3/L)*(m3/L));
			var ax8=(343/2)*sqrt((m3/W)*(m3/W));
			var ax9=(343/2)*sqrt((m3/H)*(m3/H));
			var ax10=(343/2)*sqrt((m4/L)*(m4/L));
			var ax11=(343/2)*sqrt((m4/W)*(m4/W));
			var ax12=(343/2)*sqrt((m4/H)*(m4/H));
			var ax13=(343/2)*sqrt((m5/L)*(m5/L));
			var ax14=(343/2)*sqrt((m5/W)*(m5/W));
			var ax15=(343/2)*sqrt((m5/H)*(m5/H));
			var ax16=(343/2)*sqrt((m6/L)*(m6/L));
			var ax17=(343/2)*sqrt((m6/W)*(m6/W));
			var ax18=(343/2)*sqrt((m6/H)*(m6/H));
			var ax19=(343/2)*sqrt((m7/L)*(m7/L));
			var ax20=(343/2)*sqrt((m7/W)*(m7/W));
			var ax21=(343/2)*sqrt((m7/H)*(m7/H));
			var ax22=(343/2)*sqrt((m8/L)*(m8/L));
			var ax23=(343/2)*sqrt((m8/W)*(m8/W));
			var ax24=(343/2)*sqrt((m8/H)*(m8/H));
			var ax25=(343/2)*sqrt((m9/L)*(m9/L));
			var ax26=(343/2)*sqrt((m9/W)*(m9/W));
			var ax27=(343/2)*sqrt((m9/H)*(m9/H));
			var tng1=(343/2)*sqrt((m1/L)*(m1/L)+(m1/W)*(m1/W));
			var tng2=(343/2)*sqrt((m1/L)*(m1/L)+(m1/H)*(m1/H));
			var tng3=(343/2)*sqrt((m1/H)*(m1/H)+(m1/W)*(m1/W));
			var tng4=(343/2)*sqrt((m2/L)*(m2/L)+(m2/W)*(m2/W));
			var tng5=(343/2)*sqrt((m2/L)*(m2/L)+(m2/H)*(m2/H));
			var tng6=(343/2)*sqrt((m2/H)*(m2/H)+(m2/W)*(m2/W));
			var tng7=(343/2)*sqrt((m3/L)*(m3/L)+(m3/W)*(m3/W));
			var tng8=(343/2)*sqrt((m3/L)*(m3/L)+(m3/H)*(m3/H));
			var tng9=(343/2)*sqrt((m3/H)*(m3/H)+(m3/W)*(m3/W));
			var tng10=(343/2)*sqrt((m4/L)*(m4/L)+(m4/W)*(m4/W));
			var tng11=(343/2)*sqrt((m4/L)*(m4/L)+(m4/H)*(m4/H));
			var tng12=(343/2)*sqrt((m4/H)*(m4/H)+(m4/W)*(m4/W));
			var tng13=(343/2)*sqrt((m5/L)*(m5/L)+(m5/W)*(m5/W));
			var tng14=(343/2)*sqrt((m5/L)*(m5/L)+(m5/H)*(m5/H));
			var tng15=(343/2)*sqrt((m5/H)*(m5/H)+(m5/W)*(m5/W));
			var tng16=(343/2)*sqrt((m6/L)*(m6/L)+(m6/W)*(m6/W));
			var tng17=(343/2)*sqrt((m6/L)*(m6/L)+(m6/H)*(m6/H));
			var tng18=(343/2)*sqrt((m6/H)*(m6/H)+(m6/W)*(m6/W));
			var tng19=(343/2)*sqrt((m7/L)*(m7/L)+(m7/W)*(m7/W));
			var tng20=(343/2)*sqrt((m7/L)*(m7/L)+(m7/H)*(m7/H));
			var tng21=(343/2)*sqrt((m7/H)*(m7/H)+(m7/W)*(m7/W));
			var tng22=(343/2)*sqrt((m8/L)*(m8/L)+(m8/W)*(m8/W));
			var tng23=(343/2)*sqrt((m8/L)*(m8/L)+(m8/H)*(m8/H));
			var tng24=(343/2)*sqrt((m8/H)*(m8/H)+(m8/W)*(m8/W));
			var tng25=(343/2)*sqrt((m9/L)*(m9/L)+(m9/W)*(m9/W));
			var tng26=(343/2)*sqrt((m9/L)*(m9/L)+(m9/H)*(m9/H));
			var tng27=(343/2)*sqrt((m9/H)*(m9/H)+(m9/W)*(m9/W));
			var obl1=(343/2)*sqrt((m1/L)*(m1/L)+(m1/W)*(m1/W)+(m1/H)*(m1/H));
			var obl2=(343/2)*sqrt((m2/L)*(m2/L)+(m2/W)*(m2/W)+(m2/H)*(m2/H));
			var obl3=(343/2)*sqrt((m3/L)*(m3/L)+(m3/W)*(m3/W)+(m3/H)*(m3/H));
			var obl4=(343/2)*sqrt((m4/L)*(m4/L)+(m4/W)*(m4/W)+(m4/H)*(m4/H));
			var obl5=(343/2)*sqrt((m5/L)*(m5/L)+(m5/W)*(m5/W)+(m5/H)*(m5/H));
			var obl6=(343/2)*sqrt((m6/L)*(m6/L)+(m6/W)*(m6/W)+(m6/H)*(m6/H));
			var obl7=(343/2)*sqrt((m7/L)*(m7/L)+(m7/W)*(m7/W)+(m7/H)*(m7/H));
			var obl8=(343/2)*sqrt((m8/L)*(m8/L)+(m8/W)*(m8/W)+(m8/H)*(m8/H));
			var obl9=(343/2)*sqrt((m9/L)*(m9/L)+(m9/W)*(m9/W)+(m9/H)*(m9/H));
			ret.axia1   = ax1; 
			ret.axia2   = ax2;
			ret.axia3   = ax3;
			ret.axia4   = ax4;
			ret.axia5   = ax5;
			ret.axia6   = ax6;
			ret.axia7   = ax7; 
			ret.axia8   = ax8;
			ret.axia9   = ax9;
			ret.axia10  = ax10;
			ret.axia11  = ax11;
			ret.axia12  = ax12;
			ret.axia13  = ax13; 
			ret.axia14  = ax14;
			ret.axia15  = ax15;
			ret.axia16  = ax16;
			ret.axia17  = ax17;
			ret.axia18  = ax18;
			ret.axia19  = ax19;
			ret.axia20  = ax20;
			ret.axia21  = ax21;
			ret.axia22  = ax22;
			ret.axia23  = ax23; 
			ret.axia24  = ax24;
			ret.axia25  = ax25;
			ret.axia26  = ax26;
			ret.axia27  = ax27;
      ret.axis = [ax1, ax2, ax3, ax4, ax5, ax6, ax7, ax8, ax9, ax10, ax11, ax12, ax13, ax14, ax15, ax16,
        ax17, ax18, ax19, ax20, ax21, ax22, ax23, ax24, ax25, ax26, ax27];
			ret.tang1   = tng1; 
			ret.tang2   = tng2;
			ret.tang3   = tng3; 
			ret.tang4   = tng4;
			ret.tang5   = tng5; 
			ret.tang6   = tng6;
			ret.tang7   = tng7; 
			ret.tang8   = tng8;
			ret.tang9   = tng9; 
			ret.tang10  = tng10;
			ret.tang11  = tng11; 
			ret.tang12  = tng12;
			ret.tang13  = tng13; 
			ret.tang14  = tng14;
			ret.tang15  = tng15; 
			ret.tang16  = tng16;
			ret.tang17  = tng17; 
			ret.tang18  = tng18;
			ret.tang19  = tng19; 
			ret.tang20  = tng20;
			ret.tang21  = tng21; 
			ret.tang22  = tng22;
			ret.tang23  = tng23; 
			ret.tang24  = tng24;
			ret.tang25  = tng25; 
			ret.tang26  = tng26;
			ret.tang27  = tng27; 
      ret.tangent = [tng1,tng2,tng3,tng4,tng5,tng6,tng7,tng8,tng9,tng10,tng11,tng12,tng13,tng14,tng15,tng16,
        tng17,tng18,tng19,tng20,tng21,tng22,tng23,tng24,tng25,tng26,tng27];
			ret.obli1   = obl1; 
			ret.obli2   = obl2; 
			ret.obli3   = obl3; 
			ret.obli4   = obl4;
			ret.obli5   = obl5; 
			ret.obli6   = obl6; 
			ret.obli7   = obl7; 
			ret.obli8   = obl8;
			ret.obli9   = obl9;
      ret.obl = [obl1, obl2, obl3, obl4, obl5, obl6, obl7, obl8, obl9];
      ret.all = [];
      for (var i in ret.axis) {
        var a = ret.axis[i];
        ret.all.push( parseInt(a));
      }
      for (var i in ret.tangent) {
        var a = ret.tangent[i];
        ret.all.push( parseInt(a));
      }
      for (var i in ret.obl) {
        var a = ret.obl[i];
        ret.all.push( parseInt(a));
      }
      ret.all = sort_unique(ret.all);
		};
		return ret;
	};
	console.log("COMPUTE READY");
	return compute;
});

