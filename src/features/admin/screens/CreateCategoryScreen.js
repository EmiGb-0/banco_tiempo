import React, { useState } from 'react';
import {View,Text,TextInput,Pressable,Alert,ActivityIndicator,ScrollView,StyleSheet,
} from 'react-native';
import AdminLayout from '../layouts/AdminLayout';

export default function CreateCategoryScreen() {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [color, setColor] = useState('#16805f');
  const [icono, setIcono] = useState('✎');
  const [activa, setActiva] = useState(true);
  const [guardando, setGuardando] = useState(false);

  const colores = ['#16805f', '#3c9d74', '#c99a2e', '#4f7cac', '#b3566b', '#6b5b95'];
  const iconos = ['✎', '✦', '⌂', '▣', '♡', '✿'];

  const guardarCategoria = () => {
    if (!nombre.trim() || !descripcion.trim()) {
      Alert.alert('Campos incompletos', 'Todos los campos son obligatorios.');
      return;
    }

    setGuardando(true);

    setTimeout(() => {
      setGuardando(false);
      Alert.alert('Categoría creada', 'La categoría se registró correctamente.');
      setNombre('');
      setDescripcion('');
    }, 1500);
  };

  return (
    <AdminLayout>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.titulo}>Nueva categoría</Text>
        <Text style={styles.subtitulo}>Define cómo se agrupan los servicios</Text>

        <View style={styles.tarjeta}>
          <Text style={styles.etiqueta}>Nombre de la categoría</Text>
          <TextInput
            style={styles.input}
            placeholder="Ej. Creatividad"
            value={nombre}
            onChangeText={setNombre}
          />

          <Text style={styles.etiqueta}>Descripción</Text>
          <TextInput
            style={[styles.input, styles.area]}
            placeholder="Describe qué tipo de servicios incluye"
            value={descripcion}
            onChangeText={setDescripcion}
            multiline
          />

          <Text style={styles.etiqueta}>Color</Text>
          <View style={styles.fila}>
            {colores.map((c) => (
              <Pressable
                key={c}
                onPress={() => setColor(c)}
                style={[styles.color, { backgroundColor: c }, color === c && styles.activo]}
              />
            ))}
          </View>

          <Text style={styles.etiqueta}>Ícono</Text>
          <View style={styles.fila}>
            {iconos.map((ic) => (
              <Pressable
                key={ic}
                onPress={() => setIcono(ic)}
                style={[styles.caja, icono === ic && styles.cajaActiva]}
              >
                <Text style={[styles.icono, icono === ic && { color: '#fff' }]}>{ic}</Text>
              </Pressable>
            ))}
          </View>

          <Text style={styles.etiqueta}>Estado</Text>
          <View style={styles.fila}>
            <Pressable
              onPress={() => setActiva(!activa)}
              style={[styles.chip, activa && styles.chipActivo]}
            >
              <Text style={activa ? styles.textoBlanco : styles.textoGris}>
                {activa ? '✓ Activa' : '✕ Inactiva'}
              </Text>
            </Pressable>
          </View>
        </View>

        <Pressable style={styles.boton} onPress={guardarCategoria} disabled={guardando}>
          <Text style={styles.textoBoton}>
            {guardando ? 'Guardando...' : 'Guardar categoría'}
          </Text>
        </Pressable>

        {guardando && (
          <ActivityIndicator size="small" color="#16805f" style={{ marginVertical: 10 }} />
        )}

        <View style={{ height: 35 }} />
      </ScrollView>
    </AdminLayout>
  );
}

const styles = StyleSheet.create({
  titulo: { fontSize: 24, fontWeight: 'bold', color: '#1f2937' },
  subtitulo: { fontSize: 13, color: '#64748b', marginBottom: 14 },
  tarjeta: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    marginBottom: 14,
  },
  etiqueta: { fontSize: 13, fontWeight: '600', color: '#1f2937', marginBottom: 6, marginTop: 8 },
  input: {
    backgroundColor: '#f8fafc',
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 8,
    padding: 10,
    fontSize: 14,
    color: '#1f2937',
  },
  area: { minHeight: 70, textAlignVertical: 'top' },
  fila: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginVertical: 4 },
  color: { width: 34, height: 34, borderRadius: 17, borderWidth: 3, borderColor: 'transparent' },
  activo: { borderColor: '#1f2937' },
  caja: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#f1f5f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cajaActiva: { backgroundColor: '#16805f' },
  icono: { fontSize: 18, color: '#64748b' },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f1f5f9',
  },
  chipActivo: { backgroundColor: '#16805f' },
  textoBlanco: { color: '#fff', fontWeight: 'bold', fontSize: 13 },
  textoGris: { color: '#64748b', fontWeight: 'bold', fontSize: 13 },
  boton: { backgroundColor: '#16805f', padding: 13, borderRadius: 8, alignItems: 'center' },
  textoBoton: { color: '#fff', fontWeight: 'bold', fontSize: 15 },
});
