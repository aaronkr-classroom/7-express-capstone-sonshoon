// errorController.js
"use strict";



/**
 * Listing 11.2 (p. 168)
 */
exports.logErrors= (err,req,res,next) => {
    console.error(err.stack);
    next(err);
};


/**
 * Listing 12.11 (p. 184)
 * 에러 처리 라우트 추가
 */


/**
 * [노트] 라우트 순서는 중요하다. 이 라우트는 기존에 존재하는 라우트 아래에 와야 한다.
 * 기존 라우트는 범용으로 사용되는 것이며 하위 라우트에 오버라이딩되기 때문이다.
 */