-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 28, 2025 at 02:51 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `su_final_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `bazars`
--

CREATE TABLE `bazars` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `food_list` text DEFAULT NULL,
  `total_amount` decimal(10,2) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bazars`
--

INSERT INTO `bazars` (`id`, `user_id`, `date`, `food_list`, `total_amount`, `created_at`, `updated_at`) VALUES
(2, 2, '2025-11-25', '[{\"name\":\"Chicken\",\"price\":300,\"qty\":\"1\"},{\"name\":\"Oil\",\"price\":150,\"qty\":\"1\"},{\"name\":\"chal\",\"price\":500,\"qty\":\"6kg\"}]', 950.00, '2025-11-26 01:32:22', '2025-11-26 08:44:25'),
(3, 1, '2025-11-20', '[{\"name\":\"alu\",\"price\":20,\"qty\":\"1kg\"},{\"name\":\"chall\",\"price\":80,\"qty\":\"1kg\"}]', 100.00, '2025-11-26 02:36:26', '2025-11-26 02:36:26'),
(4, 1, '2025-11-20', '[{\"name\":\"piaz\",\"price\":20,\"qty\":\"250 gram\"}]', 20.00, '2025-11-26 02:39:43', '2025-11-26 02:39:43'),
(5, 1, '2025-11-26', '[{\"name\":\"chal\",\"price\":200,\"qty\":\"2.5kg\"},{\"name\":\"dal\",\"price\":30,\"qty\":\"250 gram\"},{\"name\":\"tel\",\"price\":180,\"qty\":\"1kg\"},{\"name\":\"alo\",\"price\":30,\"qty\":\"kg\"},{\"name\":\"handwash\",\"price\":75,\"qty\":\"1pc\"}]', 515.00, '2025-11-26 02:57:19', '2025-11-26 08:47:45'),
(6, 8, '2025-11-28', '[{\"name\":\"chal\",\"price\":200,\"qty\":\"2.5kg\"},{\"name\":\"dal\",\"price\":40,\"qty\":\"300 gram\"},{\"name\":\"tel\",\"price\":170,\"qty\":\"1 kg\"},{\"name\":\"piaz\",\"price\":120,\"qty\":\"1kb\"}]', 530.00, '2025-11-27 16:37:15', '2025-11-27 16:38:05'),
(7, 8, '2025-10-31', '[{\"name\":\"chal\",\"price\":500,\"qty\":\"6kg\"},{\"name\":\"dal \",\"price\":200,\"qty\":\"1.5kg\"},{\"name\":\"moric\",\"price\":20,\"qty\":\"100 gram\"}]', 720.00, '2025-11-27 16:40:13', '2025-11-27 16:42:20'),
(8, 8, '2025-11-12', '[{\"name\":\"morgi\",\"price\":450,\"qty\":\"2kg\"}]', 450.00, '2025-11-27 16:42:54', '2025-11-27 16:42:54'),
(10, 1, '2025-11-15', '[{\"name\":\"adf\",\"price\":23,\"qty\":\"23\"}]', 23.00, '2025-11-28 01:48:33', '2025-11-28 01:48:33');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `email`, `phone`, `password`, `created_at`, `updated_at`) VALUES
(1, 'Md', 'Hadiuzzaman', 'zhhadi50@gmail.com', '01994258275', '123456', '2025-11-17 17:04:12', '2025-11-17 17:04:12'),
(2, 'Mr', 'Admin', 'admin@example.com', '01700000000', '123456', '2025-11-17 17:04:12', '2025-11-17 17:04:12'),
(3, 'ab', 'c', 'ab@gmail.com', NULL, '123456', '2025-11-27 03:02:30', '2025-11-27 03:02:30'),
(4, 'aa', 'aa', 'ab1@gmail.com', NULL, '123456', '2025-11-27 03:07:00', '2025-11-27 03:07:00'),
(5, 'aa', 'aa', 'ab2@gmail.com', NULL, '123456', '2025-11-27 03:07:16', '2025-11-27 03:07:16'),
(6, 'aa', 'aa', 'ab3@gmail.com', NULL, '123456', '2025-11-27 03:07:43', '2025-11-27 03:07:43'),
(7, 'aa', 'aa', 'ab4@gmail.com', NULL, '123456', '2025-11-27 03:09:22', '2025-11-27 03:09:22'),
(8, 'Member', '1', 'member1@example.com', NULL, '123456', '2025-11-27 16:36:02', '2025-11-27 16:36:02'),
(9, 'Member', '2', 'member2@example.com', NULL, '123456', '2025-11-27 16:48:54', '2025-11-27 16:48:54');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bazars`
--
ALTER TABLE `bazars`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bazars`
--
ALTER TABLE `bazars`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bazars`
--
ALTER TABLE `bazars`
  ADD CONSTRAINT `bazars_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
