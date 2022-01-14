// Safae Boufker

    
console.log("Kids Box exercice !");
const { Console } = require("console");
const { cpuUsage } = require("process");
// box counters
let bxCounter=3;
let pointCounter=4;

// list of boxes 
let boxList = [{
    Bname:"box1",
    x:8,
    y:-6,
    },
    {
        Bname:"box2",
        x: 6,
    y: 10,
    
    },{
        Bname:"box3",
    x: 4,
    y: 5,
   
    
  }]
  // list of points (kid's positions)
  let PointList = [{
      Pname:"pA",
    x: 8,
    y: 8
  }, {
    Pname:"pB",
    x: 2,
    y: 7
  }
,
{
    Pname:"pC",
    x: -2,
    y: 1
  },
  {
    Pname:"pD",
    x: -5,
    y: -7
  }]
  //  distance formula
  function getDiaDist(PointList){
    return Math.sqrt(Math.pow(PointList.x,2) + Math.pow(PointList.y,2))
  }
  // get distance between two- points
  function getDistance(p1,p2){
    return getDiaDist({x:p1.x - p2.x, y:p1.y - p2.y});
  }
  // get the closest point 
  function getNearestPoint(boxList,PointList){
   
         result = boxList[0];
         var listOfObjects = [];
         console.log(boxList);
         //console.log(pointCounter);
    for (let i = 0; i < pointCounter; i++) {
        let min = Infinity;
        let plist = PointList[i];
        console.log(plist);

    boxList.forEach(a => {
      let dist = getDistance(a,plist);
     console.log(a.Bname +" "+dist)
      if(dist < min){
        min = dist
        result = plist.Pname +" "+a.Bname;
        
       
      }
    })
    listOfObjects.push(result);
    
   
}
 //  line containing the box corresponding to each kid
return listOfObjects ;
  }

console.log(getNearestPoint(boxList,PointList));

