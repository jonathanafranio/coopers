-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Tempo de geração: 11/04/2023 às 00:44
-- Versão do servidor: 8.0.32-0ubuntu0.22.04.2
-- Versão do PHP: 8.1.2-1ubuntu2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `crud_coopers`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `list_itens`
--

CREATE TABLE `list_itens` (
  `id` int NOT NULL,
  `description` varchar(255) NOT NULL,
  `list` int NOT NULL,
  `user` int DEFAULT NULL,
  `checked` bit(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `list_itens`
--

INSERT INTO `list_itens` (`id`, `description`, `list`, `user`, `checked`) VALUES
(1, 'Comprar pão', 1, 1, b'0'),
(2, 'Lavar louça', 1, 1, b'0'),
(3, 'Varrer a casa', 1, 1, b'0'),
(7, 'testes da lista', 2, 1, b'1'),
(8, 'novo item', 1, 1, b'1'),
(10, 'testes da lista', 2, 1, b'1'),
(11, 'outra tarefa', 1, 1, b'0'),
(12, 'mais uma tarefa', 2, 1, b'1'),
(21, 'Estudar Redux', 1, 2, b'1'),
(22, 'Fazer omelete', 1, 2, b'1'),
(23, 'Entregar esse desafio', 2, 2, b'0'),
(24, 'Fazer doc no read.me', 2, 2, b'0');

-- --------------------------------------------------------

--
-- Estrutura para tabela `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(1, 'jonathan', 'jonathan.afranio.s@gmail.com', 'b440baf7418d40790472b6dbfb9f1f20'),
(2, 'sccp', 'jonathan.afranio@hotmail.com', 'b440baf7418d40790472b6dbfb9f1f20');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `list_itens`
--
ALTER TABLE `list_itens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user` (`user`);

--
-- Índices de tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `list_itens`
--
ALTER TABLE `list_itens`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `list_itens`
--
ALTER TABLE `list_itens`
  ADD CONSTRAINT `list_itens_ibfk_1` FOREIGN KEY (`user`) REFERENCES `users` (`id`) ON DELETE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
