<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ConfigureController extends AbstractController
{
    #[Route('/configure', name: 'app_configure')]
    public function index(): Response
    {
        return $this->render('configure/index.html.twig', [
            'controller_name' => 'ConfigureController',
        ]);
    }
}
