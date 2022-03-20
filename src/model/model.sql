CREATE TABLE bank(
   BRANCH text not null,
   BANK_CUSTOMER_ID text,
   TIETO_CUSTOMER_ID text,
   HEAD_CUSTOMER_ID text,
   CUR_ACC text,
   ID serial
);
  

-- COPY (SELECT * FROM bank) TO 'C:\Users\User\Documents\bank\src\lib\file\visa.csv' CSV;
-- \COPY bank FROM 'C:\Users\User\Documents\bank\src\lib\file\bf_visa.csv' DELIMITER ',' CSV HEADER;

-- UPDATE
--    bank
-- SET
--    branch = $1,
--     bank_customer_id =$2,
--     tieto_customer_id =$3,
--     head_customer_id =$4,
--     cur_acc= $5
-- WHERE
--     id=$6