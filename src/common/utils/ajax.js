import PackingAjax from 'packing-ajax';

const AjaxPromise = ({
  url,
  data,
  type = 'GET',
  dataType = 'JSON',
  contentType = 'application/json',
  ...rest
}) => new Promise((resolve, reject = () => {}) => {
  PackingAjax({
    url,
    data,
    type,
    dataType,
    contentType,
    ...rest,
    success: (res) => {
      resolve(JSON.parse(res));
    },
    error: (err) => {
      reject(err);
    }
  });
});

const Ajax = async (params) => {
  const response = await AjaxPromise(params).then(
    res => res,
    err => ({ ret: false, errmsg: err.statusText, errcode: err.status })
  );
  return response;
};

export {
  AjaxPromise
};
export default Ajax;
