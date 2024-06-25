function pieFlavours(input, startPoint, endPoint){
   let start = input.indexOf(startPoint);
   let end = input.indexOf(endPoint);

   return input.slice(start, end + 1);
}

pieFlavours(['Apple Crisp',
       'Mississippi Mud Pie',
       'Pot Pie',
       'Steak and Cheese Pie',
       'Butter Chicken Pie',
       'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'

)