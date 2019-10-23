-- -*- mode: sql; sql-product: mysql; server: 192.254.187.215; user: plapan_lic_admin; password: welcome; -*-

--

DROP TABLE IF EXISTS payment CASCADE;
CREATE TABLE payment(id SERIAL,
currency VARCHAR(35), 
wallet_id VARCHAR(65),
transaction_id VARCHAR(65),
val VARCHAR(35),
t1 TIMESTAMP);



DROP TABLE IF EXISTS customer CASCADE;
CREATE TABLE customer(id SERIAL,
		first_name VARCHAR(35), 
                           last_name VARCHAR(35),
			   institution VARCHAR(65),
                           email VARCHAR(35),
                           payment_id INTEGER,
                           t1 TIMESTAMP,
FOREIGN KEY (payment_id) REFERENCES payment(id));

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
