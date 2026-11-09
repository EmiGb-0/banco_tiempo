import React, { useState } from 'react';
import {View,Text,TextInput,Pressable,FlatList,Alert,ActivityIndicator,ScrollView,StyleSheet,
} from 'react-native';
import AdminLayout from '../layouts/AdminLayout';

export default function AdminHomeScreen() {
 
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [guardando, setGuardando] = useState(false);

  // Lista con la actividad 
  const [actividades, setActividades] = useState([
    {
      id: '1',
      titulo: 'Nuevo servicio publicado',
      detalle: 'Fotografía con tu móvil · Categoría: Creatividad',
      tiempo: 'Hace 12 min',
    },
    {
      id: '2',
      titulo: 'Transferencia de créditos',
      detalle: 'Mariana López transfirió 2 horas a Carlos Hernández',
      tiempo: 'Hace 1 hora',
    },
    {
      id: '3',
      titulo: 'Usuario por aprobar',
      detalle: 'Diego Ruiz solicitó ingresar al banco de tiempo',
      tiempo: 'Hace 3 horas',
    },
  ]);

 
  const agregarAviso = () => {
    if (!titulo.trim() || !descripcion.trim()) {
      Alert.alert('Campos incompletos', 'Todos los campos son obligatorios.');
      return;
    }

    setGuardando(true);

    setTimeout(() => {
      const nuevoAviso = {
        id: Date.now().toString(),
        titulo: titulo.trim(),
        detalle: descripcion.trim(),
        tiempo: 'Justo ahora',
      };

      setActividades([nuevoAviso, ...actividades]);
      setTitulo('');
      setDescripcion('');
      setGuardando(false);
      Alert.alert('Aviso publicado', 'Aviso guardado correctamente.');
    }, 1500);
  };

  return (
    <AdminLayout>
      <ScrollView style={styles.contenedor} showsVerticalScrollIndicator={false}>
        
        <View style={styles.banner}>
          <Text style={styles.bannerSaludo}>Hola, Administrador</Text>
          <Text style={styles.bannerHoras}>1,248 horas</Text>
          <Text style={styles.bannerDetalle}>
            Intercambiadas por la comunidad este mes
          </Text>
        </View>

        
        <Text style={styles.tituloSeccion}>Métricas de la plataforma</Text>
        <View style={styles.grid}>
          <View style={styles.tarjetaMetrica}>
            <Text style={styles.numeroMetrica}>342</Text>
            <Text style={styles.textoMetrica}>Usuarios activos</Text>
          </View>
          <View style={styles.tarjetaMetrica}>
            <Text style={styles.numeroMetrica}>128</Text>
            <Text style={styles.textoMetrica}>Servicios publicados</Text>
          </View>
          <View style={styles.tarjetaMetrica}>
            <Text style={styles.numeroMetrica}>17</Text>
            <Text style={styles.textoMetrica}>Solicitudes pendientes</Text>
          </View>
          <View style={styles.tarjetaMetrica}>
            <Text style={styles.numeroMetrica}>4,560</Text>
            <Text style={styles.textoMetrica}>Créditos en circulación</Text>
          </View>
        </View>

        
        <Text style={styles.tituloSeccion}>Publicar aviso comunitario</Text>
        <View style={styles.tarjetaFormulario}>
          <TextInput
            style={styles.input}
            placeholder="Título del aviso"
            placeholderTextColor="#94a3b8"
            value={titulo}
            onChangeText={setTitulo}
          />
          <TextInput
            style={[styles.input, styles.inputArea]}
            placeholder="Descripción del aviso"
            placeholderTextColor="#94a3b8"
            value={descripcion}
            onChangeText={setDescripcion}
            multiline
          />

          <Pressable style={styles.boton} onPress={agregarAviso} disabled={guardando}>
            <Text style={styles.textoBoton}>
              {guardando ? 'Guardando aviso...' : 'Publicar Aviso'}
            </Text>
          </Pressable>

          {guardando && (
            <View style={styles.cargando}>
              <ActivityIndicator size="small" color="#16805f" />
              <Text style={styles.textoCargando}>Guardando en el sistema...</Text>
            </View>
          )}
        </View>

      
        <Text style={styles.tituloSeccion}>
          Actividad y avisos ({actividades.length})
        </Text>

        <FlatList
          data={actividades}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <View style={styles.tarjetaItem}>
              <Text style={styles.itemTitulo}>{item.titulo}</Text>
              <Text style={styles.itemDetalle}>{item.detalle}</Text>
              <Text style={styles.itemTiempo}>{item.tiempo}</Text>
            </View>
          )}
        />

        <View style={{ height: 35 }} />
      </ScrollView>
    </AdminLayout>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
  },
  banner: {
    backgroundColor: '#16805f',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
  },
  bannerSaludo: {
    color: '#d5ebdd',
    fontSize: 14,
  },
  bannerHoras: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 6,
  },
  bannerDetalle: {
    color: '#d5ebdd',
    fontSize: 13,
  },
  tituloSeccion: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 10,
    marginTop: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 10,
  },
  tarjetaMetrica: {
    backgroundColor: '#ffffff',
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    flexBasis: '47%',
    flexGrow: 1,
  },
  numeroMetrica: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#16805f',
    marginBottom: 4,
  },
  textoMetrica: {
    fontSize: 12,
    color: '#64748b',
  },
  tarjetaFormulario: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    marginBottom: 12,
  },
  input: {
    backgroundColor: '#f8fafc',
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 15,
    color: '#1f2937',
  },
  inputArea: {
    minHeight: 65,
    textAlignVertical: 'top',
  },
  boton: {
    backgroundColor: '#16805f',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBoton: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  cargando: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 12,
  },
  textoCargando: {
    color: '#64748b',
    fontSize: 13,
  },
  tarjetaItem: {
    backgroundColor: '#ffffff',
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    marginBottom: 10,
  },
  itemTitulo: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 4,
  },
  itemDetalle: {
    fontSize: 13,
    color: '#4b5563',
    marginBottom: 6,
  },
  itemTiempo: {
    fontSize: 11,
    color: '#94a3b8',
  },
});
