var txt1;
var btn1;
var divGraph;
var size=10;
var yTime=[];
var X = [];
var yFact=[];

window.onlaod=function(){
    txt1 = document.getElementById('txt1');
    btn1 = document.getElementById('btn1');
    divGraph = document.getElementById('divGraph');
    resetBoard(board,size);
        
    }


function resetBoard(board,size){
for(var i=1;i<n;i++){
board[i]=[];
for(var j=0;j<n;j++){
 board[i][j]=0;
}
}
}

function btnclick(){
    var start =0 , end=0, avgTimes=0,sumTime=0 ,c=0;
    for(var n=4;n<size;n+=1,c++){
	resetBoard(board,size);
        var ans;
        for(var t=0 ; t<avgTimes;t++);
        start = performance.now();
        ans=nQueen(board,n,0);
        end = performance.now();
	sumTime+=end-start
    }//end for t;
	x[c]=n;
	yTime[c]=sumTime/avgTimes;
	yFact[c]=factorial(n);
    txt1.value += ""+n+","+ sumTime/avgTimes+","+ans+" ";
}// end for n
	normalize(yTime);
	normalize(yFact);
	var trace1={
	x:X,
	y:yTime,
	type:'scatter',
	name:'RunTime'

	}
	
	var trace2={
	x:X,
	y:yTime,
	type:'scatter',
	name:'BigOh!'

	}
var data={trace1,trace2};
Plotly.newPlot(divGraph,data);

	


function isSafe(brd,x,y,n){

	for(var i = 0; i < y; i++){

		if(brd[x][i]==1) return false;

	}

	for(var i=x-1,j=y-1;(i>0&&j>0);i--,j--){

		if(brd[i][j]==1) return	false;

	}

	for(var i=x-1,j=y+1;(i>0&&j<n);i--,j++){

		if(brd[i][j]==1) return	false;

	}

	return true

}



function nQueen(brd,n,y){

	if(y==n) return true;

	else{

		for(var i=0;i<n;i++){

			if(isSafe(brd,i,y,n)){

				brd[i][y]=1;

				if(nQueen(brd,n,y+1))

					return true;

				else

					brd[i][y]=0;

			}

		}

		return false;

	}//end else

}