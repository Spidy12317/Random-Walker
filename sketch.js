let can;
let pro;
let btn,btn_val,res;

let m=0, m1= 0;
let q = 1/2;
let p = 1/2;
let x = 0;
let N1=20, N = 20;
let hor_sep;


function setup() {
  can = createCanvas(1600, 400);
  can.parent("canvas");
  btn = select("#find");
  res = select("#reset");
  btn_value = select("#m_value");
  
  chance();
  
  btn.mouseClicked(()=>{
    
    m1 = int(btn_value.value());
    chance();
  });
  
  res.mouseClicked( ()=> {
    
    x = 0;
    N = N1;
    chance();
    loop();
    
    
  });
}


function draw() {
  
  fill(255);
  stroke(255);
  textSize(20);
  background(0);
  textAlign(CENTER,CENTER);
  
  
  translate(width/2,height/2);
  
  hor_sep = width/(2*(N1+1)); 
  line(-width/2,0,width/2,0);  
  text(N,width/2-40,height/2-20);
  text("Random Walker",0,-height/3);
  text("Total Number of Steps (N): " + N1,0,height/2-50);
  text("Probability of Landing on " + m1 + " is: " + pro + "%",0,height/2-20);
  text(x,x*hor_sep,-40);
  
  
  for (let i=-N1;i<N1+1;i++){
    
    line(hor_sep*i,5,hor_sep*i,- 5);
    
  }
  
  ellipse(x*hor_sep,0,20);
  // print(N)
  
}

function factorial(n){
  
  if(n==0){
    return(1);
  }
  
  return(n*factorial(n-1));
  
  
}
function chance(){
  
  m = m1-x;
  
  if(m>=-N && m<=N){ 
    if(N%2==0){
          if(m%2==0){
             pro =((Math.pow(p,(N+m)/2)) * (Math.pow(q,(N-m)/2)) * (factorial(N))/(factorial((N+m)/2)*factorial((N-m)/2) ))
          }
          else{
              pro = 0;
          }
      }
      else{
          if(m%2!=0){
             pro =((Math.pow(p,(N+m)/2)) * (Math.pow(q,(N-m)/2)) * (factorial(N))/(factorial((N+m)/2)*factorial((N-m)/2) ))
          }
          else{
              pro = 0;
          }
      }

  
  pro *= 100;
  pro = round(pro,4);  
  }
  else{
    pro = 0;
  }
  
}


function mousePressed(){
  
  if(mouseY<height){
    x+= Math.pow(-1,Math.floor(random(2)));
    N--;
    chance();
    if(N<=0){
      noLoop();
    }
  }
}
