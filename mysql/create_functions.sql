-- -*- mode: sql; sql-product: mysql; server: 192.254.187.215; user: plapan_lic_admin; password: welcome; -*-

--


DROP TABLE IF EXISTS customer CASCADE;
CREATE TABLE customer(id SERIAL,
		first_name VARCHAR(35), 
                           last_name VARCHAR(35),
			   institution VARCHAR(65),
                           email VARCHAR(35),
                           t1 TIMESTAMP);


DROP TABLE IF EXISTS payment CASCADE;
CREATE TABLE payment(id SERIAL,
currency VARCHAR(35), 
wallet_id VARCHAR(65),
pwd VARCHAR(65),
transaction_id VARCHAR(65),
amount VARCHAR(35),
valid BOOLEAN,
customer_id INT,
t1 TIMESTAMP,
FOREIGN KEY (customer_id) REFERENCES customer(id));


INSERT INTO payment(currency, wallet_id)
VALUES
    ('litecoin','LUbXaSLcmyBWeCLMvqNgtipcAnHy3xmAEH'), 
    ('litecoin','LPLJfCxg3gYnQja4G3nGVDgaeao3bscAHi'), 
    ('litecoin','LM7L5UDXdMAVDhjhUPgfoZE7W9WajkBdtK'), 
    ('litecoin','LZw37skYmos2SDbXxbJxtw6yps39qfNQ8V'), 
    ('litecoin','LZXzceT8MnzFyQjtP3AKHz5AL2V7Swx1cG'), 
    ('litecoin','LTmeTySEs62PoNaEKiuDeLNufLohMLwpoc'), 
    ('litecoin','LQ5WgakxfYYqfRTdDDBV363AjxGMRXeZWN'), 
    ('litecoin','LeUzJqsV3hen3aTrjJWWupFfHcQfrvvyrw'), 
    ('litecoin','LMGaFd8tmxJSDbo3GLZFJaPd1kNJ9r1v48'), 
    ('litecoin','Le4Mm1kPAkLE12KA2uU32xLqdbhtXxcS9u'), 
    ('litecoin','LNHcyCddhGn6WeMg9kK6kAUEVMgUzcaNTj'), 
    ('litecoin','LT3mYRc9r7aH75AKi1sJNF1DAcnUGceBeE'), 
    ('litecoin','LYSZ5tShMZXinQJeziNCb3nQohHhxdSgNS'), 
    ('litecoin','LUjzVxJet4fbk6Vj8nGjkWieV5L2HFqcmB'), 
    ('litecoin','LWPw8duwhe9oEK3EU5MQui9rXeEV9NTKF8'), 
    ('litecoin','LYyUQG3c6tohhyE5cYCw6jdyxsee2wyryf'), 
    ('litecoin','LSXV7tUc31fq6QYRjXmo1ojWnfNBji67B4'), 
    ('litecoin','LTWW9W8C8Fc6eeyYJUdWafnG6ZjMw3fTSm'), 
    ('litecoin','Lah8ZDMc1Re1mbqzVqJCVLnCTHy1H3SKf6'), 
    ('litecoin','LetU8pQ1ucXGQTEN6PXL1VVaP3qNeGeyUC'), 
    ('litecoin','LTYVjJJ6dzA3DCim5WQJhR2UDgywY9JhUV'), 
    ('litecoin','LZUKCMiwxacsoM8B24BWqUKYTZSYydTTtr'), 
    ('litecoin','LY1R4N5M8RSTegKFkJEJDzBNPSmtH4T5e1'), 
    ('litecoin','LVoHDVm2MfG55Mf3QivpGu2Ayd4ykMaV2G'), 
    ('litecoin','LUK2GMwJuWcRgBkmRfY7JpULm1QZLWh9MC'), 
    ('litecoin','LYTZ4DWLnFpXqZDMP1s6ACukZawsMaTuaV'), 
    ('litecoin','LYNSP6u4C85MCZNLrTwgQ2PM1a8aWJBixa'), 
    ('litecoin','LUVMGzbCW6qLjZnL1qZhEavULNV6nr681f'), 
    ('litecoin','LRXyZWdLBuJieyF7j375bBSECXGu6GDQkA'), 
    ('litecoin','LcuxDwGF2Pahh1QEL2fDRNGGMFRspyKwrd');


SELECT * FROM customer;

DROP PROCEDURE new_customer;

DELIMITER //

CREATE PROCEDURE new_customer(IN _fname VARCHAR(35), in _lname VARCHAR(35), IN  _institution VARCHAR(65), IN _email VARCHAR(35), IN _currency VARCHAR(35), OUT returned_wallet_id VARCHAR(65))
BEGIN
DECLARE last_customer_id INT DEFAULT 0;
INSERT INTO customer (first_name, last_name, institution, email) VALUES(_fname, _lname, _institution, _email);
SET last_customer_id = LAST_INSERT_ID();
UPDATE  payment SET customer_id =last_customer_id  WHERE transaction_id IS NULL AND customer_id IS NULL and currency LIKE _currency LIMIT 1;
SELECT wallet_id INTO @returned_wallet_id FROM payment WHERE customer_id = last_customer_id;
SELECT @returned_wallet_id;

END//

DELIMITER ;

CALL new_customer('peter6', 'lapan6', 'gi', 'er6@er.com','litecoin', @returned_wallet_id);
SELECT @returned_wallet_id;

SELECT * FROM customer;
SELECT * FROM payment WHERE customer_id IS NOT NULL;
SELECT * FROM payment;



SELECT ROUTINE_TYPE, ROUTINE_NAME FROM INFORMATION_SCHEMA.ROUTINES WHERE ROUTINE_SCHEMA='plapan_license';





INSERT INTO payment(currency, wallet_id)
VALUES
('bitcoin','1BVo2oMK5zS1FAwkwsnhU9Z6d6L8w1ZE8q'),
('bitcoin','16fjkhwF2rkdbwogqLdHZG4fb87jUxtJBU'),
('bitcoin','15ZM1mDp5jdSGZb8RReLrtp2i11WS2sg5N'),
('bitcoin','1CoTQpsbXYQwGj6i5N4jRgrWFv4BHijyL4'),
('bitcoin','16xfysgTPd4LNv9zXTkNvZYp86Vdbo7Sz2'),
('bitcoin','1EmvRXyDSyTsi7dmW1QNDt8b2ABtq2TqFk'),
('bitcoin','1LsjG6DokwJP1M7Pd7QpbNV9kTbs5HkXRw'),
('bitcoin','195oLrJzfRtqzKu4uuUL4MXqB4gyUSKxbZ'),
('bitcoin','19kX3qjru6tKvpgYaNkr6xf1WgyWDuqecZ'),
('bitcoin','15gsyYzMp8fw6y3vuT47YkTbYmFHTC7spp'),
('bitcoin','1FKCJed9tHvpiZC2mKW6Yd2QkMXpfCctE1'),
('bitcoin','1CTUwiP2ANbf8eTNab445T6xbsoofVnvRu'),
('bitcoin','1G2uKCHX9QZxReRLta4LN2RpV4ykVdh9fs'),
('bitcoin','18i8n9o3VRLkMmWyGC7ozBy6pQfqCrwZaM'),
('bitcoin','1MLLCmVwh6jtb56cY5KX7UEYCT3HMnCQSz'),
('bitcoin','19Z51JVdNqGXscAmos3hpycbia5kbeNtN5'),
('bitcoin','1EndFJV8PTRNfPC6iU77HMgMk7qtqssuTZ'),
('bitcoin','1NNHbn3aAjv8nqpo1JBX59REXw2QGWKmUq'),
('bitcoin','1LP1gUBKRvsSjGMURfX4utEW7drndAwn1C'),
('bitcoin','1GRSDJXfsuBpFAPAutN3voDfkjwEnu2axG'),
('bitcoin','1BQdP3M9VjP4XGms7t14yRrkmPA5KfziCR'),
('bitcoin','1LdnhaejEcgEnvSu5G7GNUiqYFNpeuhcCh'),
('bitcoin','19rt3MM2sQnX5nwyJvznd3i7gaUcVzHNV9'),
('bitcoin','1AXrc5J5cbwTMzVwBkrv6Q9ijQapQGXapq'),
('bitcoin','1BkdfzreDg11pqb54sfWoy8t69o5SJNBYm'),
('bitcoin','1EWkqgYzD7cJFPGbrmw543UcE4xPY2PGec'),
('bitcoin','1AcaVvRweS4iYnnDACNhvdrpUTSoax22n4'),
('bitcoin','19DwMwc9xiFv8QUvZ7S4mCY1fAsAJGzSg3'),
('bitcoin','1CZdzxH6WrituNjMhso7HN8Dcnc1RkmH7w'),
('bitcoin','18tweqgkJoAzoXcDjrK47fDyKRC3mKJfsm'),
('bitcoin','1J35wuiwNcrR7dSmievvpYrJskvWCVQkSj'),
('bitcoin','13CYJo2JgRX5XeV6UHAstGLxiCMXZ7m1bU'),
('bitcoin','1NXv9MH9W2znY7JtboZhHS8rWsbKQGYaRw'),
('bitcoin','1ECFjR6HgHJwRQi18ATmyXSWafLXw2u4zY'),
('bitcoin','1GYZQhGZoJpE2Xk5Z6TpZ28QRQeH2ssqGA'),
('bitcoin','1Ed6RHtUetFTiKjf9PpGi7MFmqk3Zy6CvH'),
('bitcoin','1GyUeEeyULXEYuTMAWKJrk8LCwhCqXpcLj'),
('bitcoin','1N3SRo5XubENS783eWM2vyEva1qBwjVtEH'),
('bitcoin','1ME7yP3iqRPVF3boGk8HEtbZkyHw9WZyPB'),
('bitcoin','12rTobqg1qPMPj897qzhbLr4CfQpgisuZf'),
('bitcoin','1CDAFjPMVHsDKXFv8RG71PPpHRtMcbWH3h'),
('bitcoin','13ZeDNDa4rd1fGmceiuxn2zHDvqaZ5W6wq'),
('bitcoin','1EfGoSC8g7GJCeXBqoQpKhPyY8AE7pGZek'),
('bitcoin','1FHe1ReXtX35oammtANH5dNzPPkDC7YFHa'),
('bitcoin','1HGpGpMyidFmRJmr7zirz8fvA4DQ71vFWL'),
('bitcoin','1NRySHBT7d3kScFjCK5ZRooRu7nendkYTW'),
('bitcoin','1Km3VPEgZjypbQEqf2BkGjtHNdrgd2mTVX'),
('bitcoin','1Fxi1YVkCGdhVTtK7Wfcvy3F33z6y2EDBd'),
('bitcoin','16VsvpwU1E1bZkDHtrpUqqnkJo7hEU334P'),
('bitcoin','1LJebuKGg58LuVYxGKfMhZPxR3AcSoeoqr'),
('bitcoin','1CBuG9sQMwUtXE2kc4BcfRbsPYSuTGbKW6'),
('bitcoin','1FgLcjKsK8xJGcHUisE9SNwGXpCZovkFzw'),
('bitcoin','15naKxU3AhHUAFVphWZiqiDQB7GUQwsVnq'),
('bitcoin','17TVX4e6xz5oaBh55DtQQ22vEk4qEm69j'),
('bitcoin','1PSSTeDoM8fPycd8WZ5x8Nw5CQkg1iTG88'),
('bitcoin','1L49EXY9gyf2PBnXTLYNaS4m2of1UedDm5'),
('bitcoin','13gqnzfS5wZsHvT1AXva13HyNYbTyhMz4S'),
('bitcoin','13q9XtAt6mbX1r5FSTASHs98uoFedgsi1h'),
('bitcoin','17CT9uk7CCaTH14xqNKceKYcPP4bBfYrrd'),
('bitcoin','15bh2jY4vzKGBJMqzC721ynu29Np1yNjUh'),
('bitcoin','1LjyynHMPXqUqsidhU8kcPTA4V3HDLHGPc'),
('bitcoin','1F6KhazFDYJ4kc8zWjPzF4keGrLV79kXka'),
('bitcoin','164nzoZ5Jxg7t4KZy5gMokP1iis7s7Exdw'),
('bitcoin','19kh4AtJcttxRmdsh5xC3nQQ6acLQUYkiA'),
('bitcoin','1Vmc2ER6Z9oV7c8jb8xXguukp4TUofdTS'),
('bitcoin','1EVdmnLHZR2SYB2fAa5XFbS4nvGKFr7iHp'),
('bitcoin','15Kg6cV3JA5LnAUicomHbGyKCM8MzidnAS'),
('bitcoin','18GdRPvNMvYB2ciHXxS9UfpjgPU98dFr84'),
('bitcoin','1E1v7ter5itD4YreeuwF4r39YZ4N46ZwUr'),
('bitcoin','1BMhvX2cx85rBtUudEeW67azEzufw584Ub'),
('bitcoin','1EdiwXXujQ5UYJ7H3jGk6NJEAd8kCSdbt'),
('bitcoin','1NpMgKPTM82fhCQswWY2TfafLEYuazyFZu'),
('bitcoin','15XCKra795o3WU9pvj9DuShXysYxPEYNpe'),
('bitcoin','18rYEPkHTgkY2pp55E6LDauK5mgSWWNm3B'),
('bitcoin','1KHJSFCdPG3HFMMEahXx3Gbzeu5ssRYYQd'),
('bitcoin','17F8DW3Wi5SZTnWYAS6NG6HEiYh3jifPci'),
('bitcoin','1MD2r1Njuzm7TieLt3CTgHcUo3evTFYuzN'),
('bitcoin','12YyRxoFJppYMHGE5BtZ9Q8ntD33CV6Y2X'),
('bitcoin','1PNFQbzb1uUWEqHZc1jWn75gBRt6vaXYvc'),
('bitcoin','1MyvrUsEsfrazwsoFDDtNS7zudfQ72UGrd'),
('bitcoin','1t55Ho6Q5GHbgZ97SrELgYaWkNaUQB4To'),
('bitcoin','1E9Py3ho52istxtnzsXo6cGw6mWtPFzYm4'),
('bitcoin','1LCCZX5XBTxXRhkYrsHKigcWRy36ybvwYd'),
('bitcoin','1MHwithN5QVHKnW5gLxnQsym9Ci5u5vHAy'),
('bitcoin','1E736hVjJ72Uh8L6RW1YBx8rsSvDsMAYrM'),
('bitcoin','1BWGeqBAA1QcCKzzRJs8KiggCTHmW5dfKW'),
('bitcoin','1C2rUdkPyVmA5t2xVjHjrxqbs78sG4iYcp'),
('bitcoin','17fPXUM2xi8qReWs8gRCczcM7t1QojrPeR'),
('bitcoin','1KWMhwyXynahaty4HWejHciwtCxfq63p8c'),
('bitcoin','1MPhuXDDg3sot7ny3mf7aw8ytY4TpZaHTy'),
('bitcoin','1PrREaUKzzWMvo3wMb1oq3srqPkycxJBQG'),
('bitcoin','1GsFjLGXMjXSMyomanApZkZ5ZqSihdwL4Y'),
('bitcoin','1HBXSQfW9rh8FAMLz7mJJXhowfow41NnH1'),
('bitcoin','1M2fEzGdVo9FyuLP2WJTLJxTVeZbQgcBiv'),
('bitcoin','17HPMVDN4FsPNnG7SJVmJP3qaeHvmqkTEq'),
('bitcoin','19AhUmS5nhHaGexjgTnjkZvRg9nfATXYsf'),
('bitcoin','12sYDsKCVvmC6joZjys67JrFQZBkfQLXfv'),
('bitcoin','1HeLwHEb1F9PXMYhPc8deCMdRcaLf5jMY7'),
('bitcoin','1NwCtbLV1hnRN2ArbDg1EjU4vjwdXh9XGR'),
('bitcoin','145bjZRdXqERXCzJLFn6S5jzZLmLvVPXzj');
