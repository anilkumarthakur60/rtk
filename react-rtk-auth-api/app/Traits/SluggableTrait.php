<?php

namespace App\Traits;

use Cviebrock\EloquentSluggable\Sluggable;

/**
 * Trait SluggableTrait
 * @package App\Traits
 */

trait SluggableTrait
{
    use Sluggable;

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }



}
