// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

let love = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log(love.match('love'));

let pattern = /love/gi;
console.log(love.match(pattern));
