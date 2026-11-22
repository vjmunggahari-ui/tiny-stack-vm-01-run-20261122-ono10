import{mkdirSync,readdirSync,readFileSync,writeFileSync}from'node:fs';
import{join}from'node:path';
const K="!2b%'+,0        *******&***&*** ***             AEEA!           &)              %%\"%";
function run(p,g){
let D=new Int32Array(256),C=new Int32Array(64),M=new Int32Array(256),o=[],j=0,pc=0,s=0,sp=0,cp=0;
const e=c=>[Uint8Array.from(o),c];
for(;;){
if(s==1e6)return e(10);
if(pc>>>0>=p.length)return e(9);
let b=p[pc],k=K.charCodeAt(b)-32;
if(!k)return e(5);
k--;
let m=k>>4,pp=(k>>2)&3,ps=k&3;
if(pc+m>=p.length)return e(9);
s++;
let n=pc+1+m;
if(sp<pp)return e(2);
if(sp-pp+ps>256)return e(3);
pc=n;
switch(b){
case 0:return e(0);
case 1:D[sp++]=(p[pc-1]<<24)>>24;break;
case 2:D[sp++]=p[pc-4]|p[pc-3]<<8|p[pc-2]<<16|p[pc-1]<<24;break;
case 3:sp--;break;
case 4:D[sp]=D[sp-1];sp++;break;
case 5:{let t=D[sp-1];D[sp-1]=D[sp-2];D[sp-2]=t;break;}
case 6:D[sp]=D[sp-2];sp++;break;
case 7:{let a=D[sp-3];D[sp-3]=D[sp-2];D[sp-2]=D[sp-1];D[sp-1]=a;break;}
case 0x17:D[sp-1]=-D[sp-1]|0;break;
case 0x1b:D[sp-1]=~D[sp-1];break;
case 0x30:case 0x31:case 0x32:{let r=(p[pc-2]|p[pc-1]<<8)<<16>>16,t=1;if(b!=0x30){let v=D[--sp];t=b==0x31?v==0:v!=0}if(t)pc+=r;break;}
case 0x33:if(cp==64)return e(7);C[cp++]=pc;pc=p[pc-2]|p[pc-1]<<8;break;
case 0x34:if(!cp)return e(8);pc=C[--cp];break;
case 0x40:{let a=D[sp-1];if(a<0||a>255)return e(6);D[sp-1]=M[a];break;}
case 0x41:{let a=D[sp-1],v=D[sp-2];if(a<0||a>255)return e(6);sp-=2;M[a]=v;break;}
case 0x50:{let g=''+D[--sp];if(o.length+g.length>65536)return e(11);for(let i=0;i<g.length;i++)o.push(g.charCodeAt(i));break;}
case 0x51:if(o.length>65535)return e(11);o.push(D[--sp]&255);break;
case 0x52:D[sp++]=j<g.length?g[j++]:-1;break;
case 0x53:return e(D[--sp]&255);
default:{let y=D[sp-1],x=D[sp-2],r;
if(b==0x10)r=x+y|0;
else if(b==0x11)r=x-y|0;
else if(b==0x12)r=Math.imul(x,y);
else if(b==0x13){if(!y)return e(4);r=x==-2147483648&&y==-1?x:x/y|0;}
else if(b==0x14){if(!y)return e(4);r=y==-1?0:x%y|0;}
else if(b==0x15){if(!y)return e(4);r=Math.floor((x>>>0)/(y>>>0))|0;}
else if(b==0x16){if(!y)return e(4);r=(x>>>0)%(y>>>0)|0;}
else if(b==0x18)r=x&y;
else if(b==0x19)r=x|y;
else if(b==0x1a)r=x^y;
else if(b==0x1c)r=x<<y;
else if(b==0x1d)r=x>>y;
else if(b==0x1e)r=x>>>y|0;
else if(b==0x20)r=x==y?1:0;
else if(b==0x21)r=x<y?1:0;
else r=(x>>>0)<(y>>>0)?1:0;
sp-=2;D[sp++]=r;}
}}}
const I=process.env.MAKEFUN_INPUT_DIR??'/input',O=process.env.MAKEFUN_OUTPUT_DIR??'/output';
for(const id of readdirSync(I).sort()){
let r=run(readFileSync(join(I,id,'program.bin')),readFileSync(join(I,id,'input.bin')));
mkdirSync(join(O,id),{recursive:true});
writeFileSync(join(O,id,'stdout.bin'),r[0]);
writeFileSync(join(O,id,'exit.txt'),r[1]+'\n');
}
