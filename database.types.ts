export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      brands: {
        Row: {
          archive: boolean | null
          id: number
          logo: string
          name: string
        }
        Insert: {
          archive?: boolean | null
          id?: number
          logo: string
          name: string
        }
        Update: {
          archive?: boolean | null
          id?: number
          logo?: string
          name?: string
        }
        Relationships: []
      }
      catalog_sections: {
        Row: {
          archive: boolean | null
          id: number
          image: string
          name: string
        }
        Insert: {
          archive?: boolean | null
          id?: number
          image: string
          name: string
        }
        Update: {
          archive?: boolean | null
          id?: number
          image?: string
          name?: string
        }
        Relationships: []
      }
      collections: {
        Row: {
          archive: boolean | null
          banner_default: string
          banner_mobile: string
          description: string | null
          id: number
          name: string
        }
        Insert: {
          archive?: boolean | null
          banner_default: string
          banner_mobile: string
          description?: string | null
          id?: number
          name: string
        }
        Update: {
          archive?: boolean | null
          banner_default?: string
          banner_mobile?: string
          description?: string | null
          id?: number
          name?: string
        }
        Relationships: []
      }
      "inner-page-banners": {
        Row: {
          id: number
          id_collection: number
        }
        Insert: {
          id?: number
          id_collection: number
        }
        Update: {
          id?: number
          id_collection?: number
        }
        Relationships: [
          {
            foreignKeyName: "inner-page-banners_id_collection_fkey"
            columns: ["id_collection"]
            isOneToOne: false
            referencedRelation: "collections"
            referencedColumns: ["id"]
          },
        ]
      }
      "main-page-banners": {
        Row: {
          id: number
          id_collection: number
        }
        Insert: {
          id?: number
          id_collection: number
        }
        Update: {
          id?: number
          id_collection?: number
        }
        Relationships: [
          {
            foreignKeyName: "main-page-banners_id_collection_fkey"
            columns: ["id_collection"]
            isOneToOne: false
            referencedRelation: "collections"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          brand_id: number
          id: number
          image: string | null
          name: string
          price: number
          quantity: number
        }
        Insert: {
          brand_id: number
          id?: number
          image?: string | null
          name: string
          price: number
          quantity: number
        }
        Update: {
          brand_id?: number
          id?: number
          image?: string | null
          name?: string
          price?: number
          quantity?: number
        }
        Relationships: [
          {
            foreignKeyName: "products_brand_id_foreign"
            columns: ["brand_id"]
            isOneToOne: false
            referencedRelation: "brands"
            referencedColumns: ["id"]
          },
        ]
      }
      products_catalog_sections: {
        Row: {
          id_catalog_section: number
          id_product: number
        }
        Insert: {
          id_catalog_section: number
          id_product: number
        }
        Update: {
          id_catalog_section?: number
          id_product?: number
        }
        Relationships: [
          {
            foreignKeyName: "products_catalog_sections_id_catalog_section_foreign"
            columns: ["id_catalog_section"]
            isOneToOne: false
            referencedRelation: "catalog_sections"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_catalog_sections_id_product_foreign"
            columns: ["id_product"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      products_collections: {
        Row: {
          id_collection: number
          id_product: number
        }
        Insert: {
          id_collection: number
          id_product: number
        }
        Update: {
          id_collection?: number
          id_product?: number
        }
        Relationships: [
          {
            foreignKeyName: "products_collections_id_collection_foreign"
            columns: ["id_collection"]
            isOneToOne: false
            referencedRelation: "collections"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_collections_id_product_foreign"
            columns: ["id_product"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
