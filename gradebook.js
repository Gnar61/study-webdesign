function getAverage(array){
  let sum = 0;
  array.forEach(num =>{
    sum += num
  });
  let avg = sum / array.length;
  return avg;
}

function getGrade(score){
  if(score === 100){
    return "A+";
  } 
  else if(90<=score){
    return "A";
  }
  else if(79<score){
    return "B";
  }
  else if(70<=score){
    return "C";
  }
  else if(60<=score){
    return "D";
  }
  else{
    return "F";
  }

}

function hasPassingGrade(score){
  const grade = getGrade(score);
  switch(grade){
    case "A+": return true;break;
    case "A": return true;break;
    case "B": return true;break;
    case "C": return true;break;
    case "D": return true;break;
    case "F": return false;break;
  }
}

function studentMsg(array, score){
  const avg = getAverage(array);
  const grade = getGrade(score);
  if(hasPassingGrade(score)){
    return `Class average: ${avg}. Your grade: ${grade}. You passed the course.`;
  }
  else{
    return `Class average: ${avg}. Your grade: ${grade}. You failed the course.`;
  }
}
