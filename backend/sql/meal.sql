CREATE TABLE `users` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `firstname` VARCHAR(50) NOT NULL,
    `lastname` VARCHAR(50) NOT NULL,
    `email` VARCHAR(100) NOT NULL UNIQUE,
    `phone` VARCHAR(20),
    `password` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


INSERT INTO `users` (firstname, lastname, email,phone, password) 
VALUES 
("Md", "Hadiuzzaman", "zhhadi50@gmail.com", "01994258275", "123456"),
("Mr", "Admin", "admin@example.com", "01700000000", "123456");


CREATE TABLE `bazars` (
    `id` INT  AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT  NOT NULL,
    `date` DATE NOT NULL,
    `food_list` TEXT NULL,
    `total_amount` DECIMAL(10,2) NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`)
);

INSERT INTO bazars (user_id, date, food_list, total_amount)
VALUES (
    1,
    '2025-11-26',
    '[
        { "name": "Rice", "price": 120, "qty": 2 },
        { "name": "Vegetable", "price": 80, "qty": 1 }
    ]',
    200
),
(
    2,
    '2025-11-26',
    '[
        { "name": "Chicken", "price": 300, "qty": 1 },
        { "name": "Oil", "price": 150, "qty": 1 }
    ]',
    450
);
