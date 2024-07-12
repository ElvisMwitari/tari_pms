<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SupplierResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [

            'id' => $this->id,
            'company_name' => $this->company_name,
            'phone' => $this->phone,
            'email' => $this->email,
            'is_verified' => (bool) $this->is_verified,

        ];
    }
}
