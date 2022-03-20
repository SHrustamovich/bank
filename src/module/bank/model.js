const {fetch ,fetchAll} = require('../../lib/postgres')

const ALL_DATA = `
SELECT 
  * 
FROM
  bank
`
const CREATE_DATA = `
INSERT INTO bank
(branch,
  bank_customer_id,
  tieto_customer_id,
  head_customer_id,
  cur_acc)
VALUES($1,$2,$3,$4,$5)
`
const UPDATE_DATA = `
UPDATE
   bank
SET
   branch = $1,
    bank_customer_id =$2,
    tieto_customer_id =$3,
    head_customer_id =$4,
    cur_acc= $5
WHERE
    id=$6
`
const DELETE_DATA = `
DELETE
  FROM
bank
WHERE id =$1;
`
const allData = () => fetchAll(ALL_DATA)
const createData = (branch,bank_customer_id,tieto_customer_id,head_customer_id,cur_acc) => fetch(CREATE_DATA,branch,bank_customer_id,tieto_customer_id,head_customer_id,cur_acc)

const dataUpdate = (branch,bank_customer_id,tieto_customer_id,head_customer_id,cur_acc,id) => fetch(UPDATE_DATA,branch,bank_customer_id,tieto_customer_id,head_customer_id,cur_acc,id)
const deleteData = (id) => fetch(DELETE_DATA,id)

module.exports = {
  allData,
  createData,
  dataUpdate,
  deleteData
}