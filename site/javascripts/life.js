// http://www.kesiev.com/life/

<script>
  var h=10;
  var w=10;
  var map=new Array();
  var sw=0;
  var ph=20;
  var pw=20;
  var lx=0;
  var ly=0;
  var px=3;
  var py=3;
  
  function start() {
    var rt="";
    map[0]=new Array();
    map[1]=new Array();
    for (var y=0;y<h;y++) {
      rt+="<tr>";
      map[0][y]=new Array();
      map[1][y]=new Array();
      for (var x=0;x<w;x++) {
        rt+="<td id="+x+"_"+y+" onMouseOver=\"cset("+x+","+y+")\" style=\"height:"+ph+";width:"+pw+"\"></td>";
        map[0][y][x]=0; 
        map[1][y][x]=0; 
      }
      rt+="</tr>";
    }
    document.getElementById("life").innerHTML="<table style=\"border:1px solid black\" cellpadding=0 cellspacing=1>"+rt+"</table><br><span id=stats></span>";
    
      set(px+1,py,1,sw);
      set(px+2,py,1,sw);
      
      set(px,py+1,1,sw);
      set(px+3,py+1,1,sw);
      
      set(px,py+2,1,sw);
      set(px+1,py+2,1,sw);
      set(px+2,py+2,1,sw);
      set(px+3,py+2,1,sw);
      life();
  }
  
  function neighbors(x,y) {
    var rt=0;
    for (var cx=x-1;cx<x+2;cx++)
      for (var cy=y-1;cy<y+2;cy++) {
        rt+=((((cx!=x)||(cy!=y))&&(cx>=0)&&(cx<w)&&(cy>=0)&&(cy<h))?map[sw][cy][cx]:0);
      }
    return rt;
  }
  
  function cset(x,y,v,csw) {
    if ((x!=lx)||(y!=ly)) {
      lx=x;
      ly=y;
      set(x,y,!map[sw][y][x],sw);
    }
  }
  
  function set(x,y,v,csw) {
    map[csw][y][x]=v;          
    document.getElementById(x+"_"+y).style.backgroundColor=(v?"white":"black");    
  }
  
  function life() {
    var n;
    var v;
    var s=new Array();
    for (var i=0;i<4;i++) s[i]=0;
    for (var y=0;y<10;y++) {
      for (var x=0;x<10;x++) {
        n=neighbors(x,y);
        v=map[sw][y][x];
        if (v) {
          if (n<2) { v=0; s[0]++; } // lonlyness
          else if (n>3) { v=0; s[1]++; } // overpopulation
          else s[3]++;
          // survives
        } else {
          if (n==3) { v=1; s[2]++; }// born
        }
        set(x,y,v,(sw+1)%2);
      }
    }
    sw=(sw+1)%2;
    var rp="";
    if (s[0]) rp+=(rp?" and ":"")+s[0]+" are dead for lonliness";
    if (s[1]) rp+=(rp?" and ":"")+s[1]+" are dead for overpopulation";
    if (s[2]) rp+=(rp?" and ":"")+s[2]+" are born";
    if (s[3]) rp+=(rp?" and ":"")+s[3]+" are still alive";
    if (!rp) { rp+="Create life moving your mouse";}
    
    document.getElementById("stats").innerHTML=rp+".";    
    setTimeout("life()",1000);
  }
</script>
