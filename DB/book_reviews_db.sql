-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 29, 2024 at 02:33 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `book_reviews_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `book_title` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `rating` int(5) DEFAULT NULL,
  `review_text` text DEFAULT NULL,
  `date_added` timestamp NOT NULL DEFAULT current_timestamp(),
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `book_title`, `author`, `rating`, `review_text`, `date_added`, `user_id`) VALUES
(119, 'Madol Doova', 'Martin Wickramasinghe', 3, 'A delightful story of childhood adventures on an isolated island in Sri Lanka.', '2024-11-28 23:18:47', 1),
(120, 'Aganthukaya', 'K. Jayathilaka', 3, 'A suspenseful novel with themes of mystery and societal critique', '2024-11-28 23:20:02', 59),
(121, 'Harry Potter and the Sorcerer’s Stone', 'J.K. Rowling', 3, 'Magic, friendship, defeating evil.', '2024-11-28 23:21:53', 1),
(132, 'Hathpana', 'Kumarathunga Munidasa', 4, 'Best and funny story, You should read this,Recomandad ', '2024-11-29 01:26:56', 59);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`, `created_at`) VALUES
(1, 'Taniya', '1234', 'tani@gmail.com', '2024-11-28 04:52:37'),
(2, 'testuser', 'password123', 'test@example.com', '2024-11-28 17:57:23'),
(3, '21it0510', '12345', 'taniyapathirana05@gmail.com', '2024-11-28 18:04:05'),
(51, 'testuser1', '$2a$10$y3lyMQIqUGd6hlvGHgPYluaFKAqP7t9lRCORbNZxepPQ1RPCriX/S', 'test1@example.com', '2024-11-28 18:45:44'),
(52, 'Piyumi', '$2a$10$g8xD1DbF2DDhQcRPiMWhF.XLXO/0WARoeg/IpO.KdtB9jOMQJB4z.', 'piyumi@gmail.com', '2024-11-28 18:47:39'),
(54, 'chalani', '$2a$10$WY9BLpbUSBuwTlcsY2TawORRXxj2MzjURMovrOVbcgPAY4dEh0a4O', 'chalani@gmail.com', '2024-11-28 18:54:12'),
(55, 'takshila', '$2a$10$w4Pqbp3ThTIx6Q53GNy6DeVWxt/nGZKIAeifgz6Kv29BwKM/ia0wK', 'takshila@gmail.com', '2024-11-28 18:56:08'),
(58, 'taniya1', '$2a$10$GNjw.x2ruCfMyJNROucnXeekNF00mivpGMmFHRPJowxweQPoayCTe', 'taniya@gmail.com', '2024-11-28 18:57:33'),
(59, 'sithum', '$2a$10$F6siCGhvZHE4Zx/d12Bj..1q6gygKCVsRXmjEh5852S31Vq9tOU2K', 'sithum@gmail.com', '2024-11-28 18:59:15'),
(60, 'perera', '$2a$10$dViNpUz9BGsS/TJ/Ky3R9.WDpNnr09oK5UNS9nTD6cVevJiVXo0iC', 'p@gmail.com', '2024-11-28 19:34:48'),
(61, 'Seetha', '$2a$10$Jc5ruuziZFiKF9Oa3y/kN.5z7t.KI7RVV5mXA7momESwMbvvzmthW', 's@gmail.com', '2024-11-28 22:31:51'),
(62, 'Ranjith', '$2a$10$JOZR27bSOnN.Q9OqJT1tR.Ib4ymwhVHZ57KVDjJ6n69oZRRS.Zkx2', 'R@gmail.lk', '2024-11-29 01:10:44'),
(71, 'sha', '$2a$10$3IyS30asTlmsvf8Q/5TaWef.dpILpccJY33a5VHBNdRR1eBVuSW1e', 'h@gmail.com', '2024-11-29 01:19:02'),
(72, 'lashi', '$2a$10$5wJdGAxU3FueYRgd/KoTTOo7/PUsVgDPtn4x7OTJqe3wqutEmRV3.', 'L@gmail.com', '2024-11-29 01:19:48'),
(78, 'Ashen', '$2a$10$QZqgsPrUH0qV3ZRO.lZGRuMp577mCdmYZ2Zv8EJVSF4w/0qXJNom.', 'A@gmail.com', '2024-11-29 01:25:27'),
(79, 'Dewmi', '$2a$10$5Vuqv/GE/KL3W6fIupEmY.It9J.XyBhy8JPpVDbKD0X.Ryra6.87O', 'Dew@gmail.com', '2024-11-29 01:29:52');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=134;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=80;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
