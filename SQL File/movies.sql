-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 14, 2019 at 05:35 AM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `movies`
--

-- --------------------------------------------------------

--
-- Table structure for table `showsRating`
--

CREATE TABLE `showsRating` (
  `id` int(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `year` year(4) NOT NULL,
  `rating` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `showsRating`
--

INSERT INTO `showsRating` (`id`, `name`, `year`, `rating`) VALUES
(101, 'war', 2018, 9),
(102, 'Raaz', 2017, 10),
(103, 'Krrish', 2016, 8),
(104, 'Hum Apke hai kaun', 1999, 7),
(105, 'missionMangal', 2018, 9),
(106, 'Mission Maangal 2', 2018, 9),
(107, 'zid', 2014, 7),
(110, '3 Idiots', 2014, 7);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `showsRating`
--
ALTER TABLE `showsRating`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `showsRating`
--
ALTER TABLE `showsRating`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=111;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
