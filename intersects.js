
function intersects ( ax, ax1, ay, ay1, bx, bx1, by, by1 ) {
    return(
      (
        (
          ( ax>=bx && ax<=bx1 )||( ax1>=bx && ax1<=bx1  )
        ) && (
          ( ay>=by && ay<=by1 )||( ay1>=by && ay1<=by1 )
        )
      )||(
        (
          ( bx>=ax && bx<=ax1 )||( bx1>=ax && bx1<=ax1  )
        ) && (
          ( by>=ay && by<=ay1 )||( by1>=ay && by1<=ay1 )
        )
      )
    )||(
      (
        (
          ( ax>=bx && ax<=bx1 )||( ax1>=bx && ax1<=bx1  )
        ) && (
          ( by>=ay && by<=ay1 )||( by1>=ay && by1<=ay1 )
        )
      )||(
        (
          ( bx>=ax && bx<=ax1 )||( bx1>=ax && bx1<=ax1  )
        ) && (
          ( ay>=by && ay<=by1 )||( ay1>=by && ay1<=by1 )
        )
      )
    );
  }