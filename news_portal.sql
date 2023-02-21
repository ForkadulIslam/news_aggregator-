-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 21, 2023 at 05:37 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `news_portal`
--

-- --------------------------------------------------------

--
-- Table structure for table `api_tokens`
--

CREATE TABLE `api_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `token` varchar(80) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `my_feeds`
--

CREATE TABLE `my_feeds` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `category` varchar(255) NOT NULL,
  `source_id` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `my_feeds`
--

INSERT INTO `my_feeds` (`id`, `user_id`, `category`, `source_id`, `created_at`, `updated_at`) VALUES
(11, 5, 'business', 'financial-post', '2023-02-18 03:45:15', '2023-02-18 05:14:58'),
(12, 9, 'health', 'medical-news-today', '2023-02-18 13:07:35', '2023-02-18 13:07:35'),
(13, 13, 'general', 'abc-news', '2023-02-18 21:00:24', '2023-02-18 21:02:27'),
(14, 15, 'general', 'associated-press', '2023-02-18 23:45:07', '2023-02-18 23:45:07');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `created_at`, `updated_at`) VALUES
(2, 'App\\Models\\User', 5, 'token', 'e0fac0425c1dd597708620011e28b7c465e61b4e5ac09823bc1974dc6a2e830a', '[\"*\"]', NULL, '2023-02-17 00:19:58', '2023-02-17 00:19:58'),
(3, 'App\\Models\\User', 5, 'token', 'b5bda5e70fe165e78cd212ec9adc52d6f639861827c17f8943e2b64618ca9436', '[\"*\"]', '2023-02-17 00:21:24', '2023-02-17 00:21:08', '2023-02-17 00:21:24'),
(4, 'App\\Models\\User', 5, 'token', '61b5c9bc88b049b824d2bc363137da554236c0555b835b7fd0ccf68f914db624', '[\"*\"]', '2023-02-18 20:44:58', '2023-02-17 00:23:54', '2023-02-18 20:44:58'),
(5, 'App\\Models\\User', 5, 'token', 'fdc7943faa143d16270048a35c079daed60edc4c4a523c6f1395f9687e0d133f', '[\"*\"]', '2023-02-17 00:27:31', '2023-02-17 00:26:47', '2023-02-17 00:27:31'),
(6, 'App\\Models\\User', 5, 'token', 'dcb12f0cd9908e716aba6a09a6eb80f4419831e5b24126a94f087389c4a99c16', '[\"*\"]', '2023-02-17 00:28:29', '2023-02-17 00:28:25', '2023-02-17 00:28:29'),
(7, 'App\\Models\\User', 5, 'token', '291314cf1a873099e6cf702516d654042e3efca33c314409514e76bddc4902c0', '[\"*\"]', NULL, '2023-02-17 00:29:29', '2023-02-17 00:29:29'),
(8, 'App\\Models\\User', 5, 'token', '9d29617b3cf29c941d042e60df90502637a88733009005c2b3eb9de8dfb10d16', '[\"*\"]', NULL, '2023-02-17 00:29:37', '2023-02-17 00:29:37'),
(9, 'App\\Models\\User', 5, 'token', 'cdf6eb3d777400f996486d897ca15f6f1f481c9788b7f334d7b43a02d1f9e350', '[\"*\"]', NULL, '2023-02-17 00:29:50', '2023-02-17 00:29:50'),
(10, 'App\\Models\\User', 5, 'token', '81a48951f9a14db4772538d3f940835be52257fd818a41bad049902295bf4b51', '[\"*\"]', '2023-02-17 00:40:07', '2023-02-17 00:30:04', '2023-02-17 00:40:07'),
(11, 'App\\Models\\User', 5, 'token', '131460310b3d7eda62a5d43041b23059720d0cd285f3227ead7adc524f33bc67', '[\"*\"]', '2023-02-17 00:50:32', '2023-02-17 00:49:27', '2023-02-17 00:50:32'),
(12, 'App\\Models\\User', 5, 'token', 'bf20790dccc1f4a30e9a886a233ad30e6c973e3140e85c8a56c5a86ded6aa7bc', '[\"*\"]', '2023-02-17 00:52:12', '2023-02-17 00:51:55', '2023-02-17 00:52:12'),
(13, 'App\\Models\\User', 5, 'token', 'ee9916c2518dbf7923b0e36ec43ae4ba2a231c061992706c0987215bf03f147c', '[\"*\"]', '2023-02-17 01:01:05', '2023-02-17 00:55:38', '2023-02-17 01:01:05'),
(14, 'App\\Models\\User', 5, 'token', '37d1a18b896354b7b80cd3c90f4329bad7145e10aa69546673de3afbc80c9b10', '[\"*\"]', '2023-02-17 01:02:08', '2023-02-17 01:01:40', '2023-02-17 01:02:08'),
(15, 'App\\Models\\User', 5, 'token', '64cbe88921f491ca67410f5ea811d996e4d2c993e372c12bcd2cbbc984c51690', '[\"*\"]', '2023-02-17 05:32:19', '2023-02-17 03:47:37', '2023-02-17 05:32:19'),
(16, 'App\\Models\\User', 5, 'token', '88a81fe73ed6f46c0f38df68bc7f41ab311910961ffd359ccc695c9cd2f424e7', '[\"*\"]', '2023-02-18 03:25:09', '2023-02-17 05:32:29', '2023-02-18 03:25:09'),
(17, 'App\\Models\\User', 5, 'token', 'c35a238735cc07bf06198b5d995a4c2030b76217145995f455d2fc4d6e2445e4', '[\"*\"]', '2023-02-18 03:32:25', '2023-02-18 03:26:23', '2023-02-18 03:32:25'),
(18, 'App\\Models\\User', 5, 'token', 'd86d559c196e3596231224a7521dcf271efb609c6857b5b60187e4b25ed2e521', '[\"*\"]', '2023-02-18 12:39:18', '2023-02-18 03:30:16', '2023-02-18 12:39:18'),
(19, 'App\\Models\\User', 5, 'token', 'd3cfd47e0637187e3e4b22139d51b4caba595fd59518313c3ccbbdc8f9c7c99a', '[\"*\"]', '2023-02-18 03:36:09', '2023-02-18 03:32:32', '2023-02-18 03:36:09'),
(20, 'App\\Models\\User', 5, 'token', '73c8971fc786fc3b82cfa62ec4f80e577205632484d88c7d72b81a9395ffea7c', '[\"*\"]', '2023-02-18 20:47:10', '2023-02-18 03:36:15', '2023-02-18 20:47:10'),
(21, 'App\\Models\\User', 8, 'token', 'ff14bf54e4a55cd49339b0638d42c8c712ba2c07798fe7f893d5ff2c766b5e83', '[\"*\"]', NULL, '2023-02-18 12:13:35', '2023-02-18 12:13:35'),
(22, 'App\\Models\\User', 9, 'token', 'a18a5dc86cc39f2af155463234f71fbaace5cdb82b8aaed1f16cde73f027f314', '[\"*\"]', NULL, '2023-02-18 12:15:33', '2023-02-18 12:15:33'),
(23, 'App\\Models\\User', 10, 'token', 'f5d67041a6b1dff9d05826051d35fc4ca75d1710513fa1500072dfda5bac118c', '[\"*\"]', NULL, '2023-02-18 12:16:39', '2023-02-18 12:16:39'),
(24, 'App\\Models\\User', 9, 'token', '9011300adbf61ed4efb2ad7170b0651a3e0268d88da9cb671fc894dcdc795582', '[\"*\"]', NULL, '2023-02-18 12:16:57', '2023-02-18 12:16:57'),
(25, 'App\\Models\\User', 5, 'token', '6e4d2ba0f501beee75ea1c1409a32ddcf220a8989d6e34237adf40fc69ffa891', '[\"*\"]', NULL, '2023-02-18 12:17:13', '2023-02-18 12:17:13'),
(26, 'App\\Models\\User', 5, 'token', '76ca1bbe14764e9aae0532ebd9bfb4e511eba7d139b413341f77e1f09deaddf0', '[\"*\"]', NULL, '2023-02-18 12:27:36', '2023-02-18 12:27:36'),
(27, 'App\\Models\\User', 9, 'token', 'd53bd36ed9437aadeb890c8b7eeb26c012fc68c887648665e05dac3251ec6978', '[\"*\"]', NULL, '2023-02-18 12:31:48', '2023-02-18 12:31:48'),
(28, 'App\\Models\\User', 5, 'token', 'b046f0ed7e9f6cfd4cf952a3fe4b7480b859d83f989910e5abb539251640cce5', '[\"*\"]', NULL, '2023-02-18 12:32:53', '2023-02-18 12:32:53'),
(29, 'App\\Models\\User', 5, 'token', 'fb9caf5f3a35dbd39bcff047a7d2eb0377e290f896b78707b45792829c00eeea', '[\"*\"]', NULL, '2023-02-18 12:34:04', '2023-02-18 12:34:04'),
(30, 'App\\Models\\User', 9, 'token', '8b9940d6d12f6b56411fc2e1027a9c47d9a60b3b52c987cebfec4f591df1759e', '[\"*\"]', NULL, '2023-02-18 12:35:53', '2023-02-18 12:35:53'),
(31, 'App\\Models\\User', 9, 'token', '5d3016d766d2af3852c77b3124842e225cb4f1bb26c5cc63920804da036debb3', '[\"*\"]', NULL, '2023-02-18 12:37:19', '2023-02-18 12:37:19'),
(32, 'App\\Models\\User', 9, 'token', '6bd8a0e196316d4252b2cd118740e31b13a905dadfee3bc3315e97189e9fca53', '[\"*\"]', NULL, '2023-02-18 12:37:48', '2023-02-18 12:37:48'),
(33, 'App\\Models\\User', 9, 'token', '9d1f63adca008496857287ea5ac9cd8842f144c03ea857a49b7d32a75add901e', '[\"*\"]', NULL, '2023-02-18 12:39:30', '2023-02-18 12:39:30'),
(34, 'App\\Models\\User', 5, 'token', '8a8ec74a555c01c6913e1ee32bcd670c66dc3791c74ba7d92b639fea4b2df35d', '[\"*\"]', '2023-02-18 12:40:06', '2023-02-18 12:39:53', '2023-02-18 12:40:06'),
(35, 'App\\Models\\User', 9, 'token', 'a5e41d40be6b16785a731fd04cc64bff6cf44e59853f30043e82699876cd5bb7', '[\"*\"]', NULL, '2023-02-18 12:43:06', '2023-02-18 12:43:06'),
(36, 'App\\Models\\User', 9, 'token', '01f56dd94ba258ca46ba0a513f1cf637d22dd3afccd8c13fd85c3a31c9f52a12', '[\"*\"]', NULL, '2023-02-18 12:43:20', '2023-02-18 12:43:20'),
(37, 'App\\Models\\User', 9, 'token', '3a8c44d67234ed5914d98c694068f96af8947f433727d662fd98bbe4ab8f028b', '[\"*\"]', NULL, '2023-02-18 12:43:57', '2023-02-18 12:43:57'),
(38, 'App\\Models\\User', 5, 'token', 'a3faa8bd757b410ca6b883004b61cc12e32c3fa19573c34180c723f08d29012d', '[\"*\"]', NULL, '2023-02-18 12:45:10', '2023-02-18 12:45:10'),
(39, 'App\\Models\\User', 9, 'token', 'd65aa984d545054c6e0f2979ebd0c01f354594839664dadf08a659e717e1e3b0', '[\"*\"]', '2023-02-18 13:00:43', '2023-02-18 12:57:09', '2023-02-18 13:00:43'),
(40, 'App\\Models\\User', 9, 'token', '8adc8eac256e78bcb7a506b06cc9e0e47d1034bdf92c6e3267a0826a4f118e1f', '[\"*\"]', '2023-02-18 13:02:34', '2023-02-18 13:00:58', '2023-02-18 13:02:34'),
(41, 'App\\Models\\User', 9, 'token', '5f0f0d09dc12b5d58c267e2ce1972321554066c2b297a657e894e8e8ef2d82b7', '[\"*\"]', NULL, '2023-02-18 13:02:44', '2023-02-18 13:02:44'),
(42, 'App\\Models\\User', 5, 'token', '5cf57ab4b8097a4b9e78388454dcbe9d7fa2b95215e67cbd7ec12c3aa2fd5941', '[\"*\"]', NULL, '2023-02-18 13:03:17', '2023-02-18 13:03:17'),
(43, 'App\\Models\\User', 9, 'token', 'f4bb20ebe6d21d190612be067fc5d76e607699b787ccab903528d64e970bbb90', '[\"*\"]', '2023-02-18 13:05:12', '2023-02-18 13:04:15', '2023-02-18 13:05:12'),
(44, 'App\\Models\\User', 9, 'token', 'a9973ff064acecef1bc4f2eb888764a61cda46eddaf732d9a0620214a9d6a4a9', '[\"*\"]', NULL, '2023-02-18 13:05:20', '2023-02-18 13:05:20'),
(45, 'App\\Models\\User', 9, 'token', 'c30ee82aebe38d673b35075e3bbee38133be1b3ca01afb8bda232acca23a3d6e', '[\"*\"]', '2023-02-18 13:06:56', '2023-02-18 13:05:47', '2023-02-18 13:06:56'),
(46, 'App\\Models\\User', 9, 'token', '3513112aac53961e7889e9a9bb91da699189fa50400759ed4c43155b2d5c4b69', '[\"*\"]', '2023-02-18 13:09:07', '2023-02-18 13:07:06', '2023-02-18 13:09:07'),
(47, 'App\\Models\\User', 13, 'token', '836d4e5fc2c9de3f89d89a55c5d30bfef0bee8df5d4777a3e1168a4ae5d3ca16', '[\"*\"]', '2023-02-18 20:58:04', '2023-02-18 20:55:03', '2023-02-18 20:58:04'),
(48, 'App\\Models\\User', 13, 'token', 'b27204805be5408f4804b6349ea9e02f3c47a42f8e9d8714e24263f851260c7f', '[\"*\"]', '2023-02-18 20:58:21', '2023-02-18 20:58:11', '2023-02-18 20:58:21'),
(49, 'App\\Models\\User', 13, 'token', '0840b2f88b942b0497b732d0ab0a70cfc19810cc174e4cfced07d90d483b9415', '[\"*\"]', '2023-02-18 21:00:01', '2023-02-18 20:59:38', '2023-02-18 21:00:01'),
(50, 'App\\Models\\User', 13, 'token', '1ca6b385022c67e6635d1982ea3f356f6c25f506e456125279aa82811e8b29d2', '[\"*\"]', '2023-02-18 23:27:43', '2023-02-18 21:00:10', '2023-02-18 23:27:43'),
(51, 'App\\Models\\User', 14, 'token', '91bc38d20f1d80bb349ee759cac5ebb7ab33c58c9a440298b0e16b04b910c027', '[\"*\"]', '2023-02-18 23:34:46', '2023-02-18 23:34:25', '2023-02-18 23:34:46'),
(52, 'App\\Models\\User', 13, 'token', '4d07a578a430daa64c564eb4648175c4e4b0493c16cfb91fb1940d9330a63f31', '[\"*\"]', '2023-02-18 23:36:34', '2023-02-18 23:34:55', '2023-02-18 23:36:34'),
(53, 'App\\Models\\User', 15, 'token', '250ed67ddcdb75c7036db186120db9abab8f1396e4328036c449ad3a178e2032', '[\"*\"]', '2023-02-18 23:53:47', '2023-02-18 23:43:29', '2023-02-18 23:53:47');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `full_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `full_name`, `remember_token`, `created_at`, `updated_at`) VALUES
(5, 'forkadulislam@gmail.com', '$2y$10$rGDJRhiTZ/7HXueNjbFb3OHSTl2F57PRVeH3NlJa4Dzy8KDJa3zai', '2342342', NULL, '2023-02-16 02:20:08', '2023-02-16 02:20:08'),
(6, 'khan@gmail.com', '$2y$10$c/knhgWpmKM7eRFdbKOmSOPxrlNpHVz4JWoq06g0JpNBUSymkcs0u', 'khan', NULL, '2023-02-18 12:03:56', '2023-02-18 12:03:56'),
(8, 'k@mail.com', '$2y$10$WHYTcud6TYFNulZ0n1nGcuVjZ9DColJ9y8RNC6KEb245BTTu8OwSW', 'khan', NULL, '2023-02-18 12:13:35', '2023-02-18 12:13:35'),
(9, 'khan@venturabd.com', '$2y$10$zOYLOl.49lG0xTj5DWYYX.FWKXFyW09AOD.2woQGDw9Ka5kduY6Jm', 'khan', NULL, '2023-02-18 12:15:33', '2023-02-18 12:15:33'),
(10, 'admin@admin.com', '$2y$10$npklMil/2D6HMKL1clrdD.l5WGpcxHpMl.13YefvnrGjteE4C0upq', 'a', NULL, '2023-02-18 12:16:39', '2023-02-18 12:16:39'),
(13, 'test@gmail.com', '$2y$10$Jw8x.7k9hgzKiqXQFhJOCua59Pp3iVovy3vJA2ggIYoJorDhxlKtC', 'test', NULL, '2023-02-18 20:55:03', '2023-02-18 20:55:03'),
(14, 'fuad@gmail.com', '$2y$10$TOMGtp/HIhTAiWM179NmdeaGYE4nX14Ugn8xdyDuKNWci5aN.X0Fe', 'fuad hasan', NULL, '2023-02-18 23:34:25', '2023-02-18 23:34:25'),
(15, 'fuadhasan@gmail.com', '$2y$10$xWzGPdpCsnKjtF8nQG8bQ.JsoxePIc7R4cVyTdDtbPhXoSBPeRBlm', 'fuadhasan', NULL, '2023-02-18 23:43:29', '2023-02-18 23:43:29');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `api_tokens`
--
ALTER TABLE `api_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `api_tokens_token_unique` (`token`),
  ADD KEY `api_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `my_feeds`
--
ALTER TABLE `my_feeds`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `api_tokens`
--
ALTER TABLE `api_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `my_feeds`
--
ALTER TABLE `my_feeds`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
