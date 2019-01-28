-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-10-2018 a las 14:09:34
-- Versión del servidor: 10.1.13-MariaDB
-- Versión de PHP: 5.6.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de datos: `crianbluff`
--
CREATE DATABASE IF NOT EXISTS `crianbluff` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci;
USE `crianbluff`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `crianbluff_contacto`
--

CREATE TABLE `crianbluff_contacto` (
  `id_contacto` int(11) NOT NULL,
  `nombre_contacto` text COLLATE utf8_spanish_ci NOT NULL,
  `email_contacto` varchar(92) COLLATE utf8_spanish_ci NOT NULL,
  `tel_contacto` varchar(11) COLLATE utf8_spanish_ci NOT NULL,
  `ext_contacto` varchar(10) COLLATE utf8_spanish_ci NOT NULL,
  `mensaje_contacto` varchar(400) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `crianbluff_contacto`
--
ALTER TABLE `crianbluff_contacto`
  ADD PRIMARY KEY (`id_contacto`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `crianbluff_contacto`
--
ALTER TABLE `crianbluff_contacto`
  MODIFY `id_contacto` int(11) NOT NULL AUTO_INCREMENT;