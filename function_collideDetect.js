function collideDetect(move, stay){

    if (move.x - stay.x <= (move.width/2 + stay.width/2)
    && stay.x - move.x <= (move.width/2 + stay.width/2)
    && stay.y - move.y <= (move.height/2 + stay.height/2)
    && move.y - stay.y <= (move.height/2 + stay.height/2)
  
    ){
   return true
    }
    else {
     return false
    }
  
  }