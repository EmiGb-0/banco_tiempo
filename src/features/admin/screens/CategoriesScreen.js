import React from 'react';
import { View, Text, TextInput, Pressable, ScrollView, StyleSheet } from 'react-native';
import AdminLayout from '../layouts/AdminLayout';

const CATEGORIAS = [
  { icono: '✎', nombre: 'Creatividad', servicios: 24, activa: true },
  { icono: '✦', nombre: 'Educación', servicios: 41, activa: true },
  { icono: '⌂', nombre: 'Hogar', servicios: 18, activa: true },
  { icono: '▣', nombre: 'Tecnología', servicios: 22, activa: true },
  { icono: '♡', nombre: 'Salud y bienestar', servicios: 9, activa: false },
  { icono: '✿', nombre: 'Cocina', servicios: 14, activa: true },
];

export default function CategoriesScreen({ navigate }) {
  return (
    <AdminLayout>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Encabezado */}
        <Text style={styles.titulo}>Categorías</Text>
        <Text style={styles.subtitulo}>{CATEGORIAS.length} categorías registradas</Text>

    
        <View style={styles.cajaBusqueda}>
          <Text style={styles.iconoLupa}>🔍</Text>
          <TextInput
            style={styles.inputBusqueda}
            placeholder="Buscar categoría..."
            placeholderTextColor="#94a3b8"
          />
        </View>

        
        <Pressable
          style={styles.boton}
          onPress={() => navigate && navigate('createCategory')}
        >
          <Text style={styles.textoBoton}>Nueva categoría →</Text>
        </Pressable>

        {/* Lista de categorías */}
        <View style={styles.tarjeta}>
          {CATEGORIAS.map((c, i) => (
            <View
              key={c.nombre}
              style={[styles.fila, i < CATEGORIAS.length - 1 && styles.bordeFila]}
            >
              <View style={styles.cajaIcono}>
                <Text style={styles.textoIcono}>{c.icono}</Text>
              </View>

              <View style={styles.info}>
                <Text style={styles.nombreCategoria}>{c.nombre}</Text>
                <Text style={styles.serviciosCategoria}>{c.servicios} servicios</Text>
              </View>

              <View style={styles.derecha}>
                <View style={[styles.badge, c.activa ? styles.badgeVerde : styles.badgeGris]}>
                  <Text style={[styles.textoBadge, c.activa ? styles.textoVerde : styles.textoGris]}>
                    {c.activa ? 'Activa' : 'Inactiva'}
                  </Text>
                </View>
                <Text style={styles.textoEditar}>Editar</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={{ height: 35 }} />
      </ScrollView>
    </AdminLayout>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  subtitulo: {
    fontSize: 13,
    color: '#64748b',
    marginBottom: 14,
  },
  cajaBusqueda: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  iconoLupa: {
    fontSize: 14,
    marginRight: 8,
  },
  inputBusqueda: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 14,
    color: '#1f2937',
  },
  boton: {
    backgroundColor: '#16805f',
    padding: 13,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 14,
  },
  textoBoton: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  tarjeta: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    paddingHorizontal: 14,
  },
  fila: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    gap: 12,
  },
  bordeFila: {
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  cajaIcono: {
    width: 38,
    height: 38,
    borderRadius: 8,
    backgroundColor: '#f1f5f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoIcono: {
    fontSize: 18,
    color: '#16805f',
  },
  info: {
    flex: 1,
  },
  nombreCategoria: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 2,
  },
  serviciosCategoria: {
    fontSize: 12,
    color: '#64748b',
  },
  derecha: {
    alignItems: 'flex-end',
    gap: 4,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  badgeVerde: {
    backgroundColor: '#d1fae5',
  },
  badgeGris: {
    backgroundColor: '#f1f5f9',
  },
  textoBadge: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  textoVerde: {
    color: '#065f46',
  },
  textoGris: {
    color: '#64748b',
  },
  textoEditar: {
    fontSize: 12,
    fontWeight: '600',
    color: '#16805f',
  },
});
