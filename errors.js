const handleCustomErrors  = ((error, req, res, next) => {
 
    if(error.status && error.msg){
        res.status(error.status).send({ msg: error.msg})
    }
    else{
        next(error)
    }
})
const handlePsqlErrors = (err, req, res, next) => {
    if (err.code === '22P02'|| err.code === '23502'|| err.code === '23503') {
      res.status(400).send({ msg: 'Bad request' });
    } else next(err);
  };
  const handleServerErrors = ((err, req, res, next) => {
    console.log(err);
    res.status(500).send({ msg: 'Internal Server Error' });
  });
  module.exports = {handleCustomErrors, handlePsqlErrors, handleServerErrors}