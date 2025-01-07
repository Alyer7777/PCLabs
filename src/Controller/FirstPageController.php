<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

class FirstPageController extends AbstractController
{
    #[Route('/firstPage/first', )]
    public function index(): JsonResponse
    {
        return $this->render('firstPage/first.html.twig', [
        ]);
    }
}
